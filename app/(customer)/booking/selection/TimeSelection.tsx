'use client'

import { useState, useEffect, useCallback } from 'react'
import Button from 'ui/button/button'
import BookingTimeslot from 'lib/interfaces/BookingTimeslots'
import CalendarColumnCellInput from '../../../../ui/calendar/CalendarColumnCellInput'
import CalendarColumn from '../../../../ui/calendar/CalendarColumn'
import CalendarColumnHeader from '../../../../ui/calendar/CalendarColumnHeader'
import CalendarView from '../../../../ui/calendar/CalendarView'
import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'
import { useStyleContext } from 'context/style-context/StyleContext'
import { addDaysToDate, todaysDate } from 'lib/utils/date'
import { fetchBookingTimeslots } from 'lib/data/booking'

/**
 * Component for selecting a time.
 * Allows user to view booking timeslots and select a timeslot.
 */
export default function TimeSelection() {
  const { widthMode } = useStyleContext()
  const {
    selectedVehicleTypeID,
    selectedServiceTypeID,
    selectedDatetime,
    setSelectedDatetime,
  } = useBookingSelectionContext()
  const [calendarStartDate, setCalendarStartDate] = useState(todaysDate())
  const [bookingTimeslots, setBookingTimeslots] = useState<{
    [date: string]: BookingTimeslot[]
  }>({})

  /**
   * Fetches booking timeslots for given dates.
   * @param {string[]} dates - The dates for which to fetch timeslots.
   * @returns {Promise<BookingTimeslot[][]>} Promise resolving to array of booking timeslots.
   */
  const fetchTimeslots = useCallback(
    async (dates: string[]) => {
      try {
        const timeslotPromises = dates.map(date =>
          fetchBookingTimeslots(
            date,
            selectedVehicleTypeID,
            selectedServiceTypeID
          )
        )
        return await Promise.all(timeslotPromises)
      } catch (error) {
        alert(error)
      }
    },
    [selectedVehicleTypeID, selectedServiceTypeID]
  )

  useEffect(() => {
    const numCols = widthMode === 'sm' ? 3 : 5

    const dates = Array.from({ length: numCols }, (_, i) =>
      addDaysToDate(calendarStartDate, i)
    )

    fetchTimeslots(dates).then(timeslotArrays => {
      if (timeslotArrays) {
        setBookingTimeslots(
          Object.fromEntries(dates.map((date, i) => [date, timeslotArrays[i]]))
        )
      }
    })
  }, [
    calendarStartDate,
    selectedVehicleTypeID,
    selectedServiceTypeID,
    widthMode,
  ])

  const handleSelectTimeslot = (datetime: string) => {
    setSelectedDatetime(datetime)
  }

  const handleNextDay = () => {
    setCalendarStartDate(addDaysToDate(calendarStartDate, 1))
  }

  const handlePreviousDay = () => {
    setCalendarStartDate(addDaysToDate(calendarStartDate, -1))
  }

  return (
    <div>
      <h1>Time Selection</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={handlePreviousDay}>Prev Day</Button>
        <CalendarView>
          {Object.entries(bookingTimeslots).map(([date, timeslots]) => (
            <CalendarColumn key={date}>
              <CalendarColumnHeader>{date}</CalendarColumnHeader>
              {timeslots.map(timeslot => (
                <CalendarColumnCellInput
                  key={timeslot.startTime}
                  timeslot={timeslot}
                  active={timeslot.startTime === selectedDatetime}
                  onSelectTimeslot={handleSelectTimeslot}
                />
              ))}
            </CalendarColumn>
          ))}
        </CalendarView>
        <Button onClick={handleNextDay}>Next Day</Button>
      </div>
    </div>
  )
}
