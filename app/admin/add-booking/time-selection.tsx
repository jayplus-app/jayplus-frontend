// TODO:
// - Add dynamic numCols based on the widthMode
// - Add loading state
// - Add error state

'use client'

import { useState, useEffect, useCallback } from 'react'
import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'
import BookingTimeslot from 'lib/interfaces/BookingTimeslots'
// import { useStyleContext } from 'context/style-context/StyleContext'
import {
  addDaysToDate,
  formatDateToRelativeOrMMMDDForm,
  todaysDate,
} from 'lib/utils/date'
import { fetchBookingTimeslots } from 'lib/data/booking'
import Button from 'ui/button/button'
import CalendarView from 'ui/calendar/CalendarView'
import CalendarColumn from 'ui/calendar/CalendarColumn'
import CalendarColumnHeader from 'ui/calendar/CalendarColumnHeader'
import CalendarColumnCellInput from 'ui/calendar/CalendarColumnCellInput'

export default function TimeSelection() {
  // const { widthMode } = useStyleContext()
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
    // const numCols = widthMode === 'sm' ? 3 : 5
    const numCols = 3

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

    setSelectedDatetime('')
  }, [calendarStartDate, selectedVehicleTypeID, selectedServiceTypeID])

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
      <p>Select appointment time</p>
      <div id='time-selection'>
        <Button
          className='calendar-day-switch-button'
          onClick={handlePreviousDay}
          disabled={calendarStartDate <= todaysDate()}
        >
          <b>{'<'}</b>
        </Button>
        <CalendarView>
          {Object.entries(bookingTimeslots).map(([date, timeslots]) => (
            <CalendarColumn key={date}>
              <CalendarColumnHeader>
                <b>{formatDateToRelativeOrMMMDDForm(date, todaysDate())}</b>
              </CalendarColumnHeader>
              {timeslots.map(timeslot => (
                <CalendarColumnCellInput
                  key={timeslot.startTime}
                  timeslot={timeslot}
                  active={timeslot.startTime === selectedDatetime}
                  disabled={timeslot.available !== true}
                  onSelectTimeslot={handleSelectTimeslot}
                />
              ))}
            </CalendarColumn>
          ))}
        </CalendarView>
        <Button className='calendar-day-switch-button' onClick={handleNextDay}>
          <b>{'>'}</b>
        </Button>
      </div>
    </div>
  )
}
