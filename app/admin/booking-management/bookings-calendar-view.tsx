'use client'

import { fetchBookings } from 'lib/data/booking'
import BookingSummary from 'lib/interfaces/BookingSummary'
import {
  addDaysToDate,
  formatDateToRelativeOrMMMDDForm,
  todaysDate,
} from 'lib/utils/date'
import { useCallback, useEffect, useState } from 'react'
import Button from 'ui/button/button'
import CalendarColumn from 'ui/calendar/CalendarColumn'
import CalendarColumnCellView from 'ui/calendar/CalendarColumnCellView'
import CalendarColumnHeader from 'ui/calendar/CalendarColumnHeader'
import CalendarView from 'ui/calendar/CalendarView'

export default function BookingsCalendarView() {
  const [calendarStartDate, setCalendarStartDate] = useState(todaysDate())
  const [bookingSummaryLists, setBookingSummaryLists] = useState<{
    [date: string]: BookingSummary[]
  }>({})

  const fetchAllBookings = useCallback(async (dates: string[]) => {
    try {
      const bookingsPromises = dates.map(date => fetchBookings(date))
      return await Promise.all(bookingsPromises)
    } catch (error) {
      alert(error)
    }
  }, [])

  useEffect(() => {
    const numCols = 3

    const dates = Array.from({ length: numCols }, (_, i) =>
      addDaysToDate(calendarStartDate, i)
    )

    fetchAllBookings(dates).then(bookingsArrays => {
      if (bookingsArrays) {
        setBookingSummaryLists(
          Object.fromEntries(dates.map((date, i) => [date, bookingsArrays[i]]))
        )
      }
    })
  }, [calendarStartDate])

  const handleNextDay = () => {
    setCalendarStartDate(addDaysToDate(calendarStartDate, 1))
  }

  const handlePreviousDay = () => {
    setCalendarStartDate(addDaysToDate(calendarStartDate, -1))
  }

  const handleClickBooking = (id: number) => {
    console.log(id)
  }

  return (
    <div id='bookings-calendar-view'>
      <Button
        className='calendar-day-switch-button'
        onClick={handlePreviousDay}
        disabled={calendarStartDate <= todaysDate()}
      >
        <b>{'<'}</b>
      </Button>
      <CalendarView>
        {Object.entries(bookingSummaryLists).map(([date, bookings]) => (
          <CalendarColumn key={date}>
            <CalendarColumnHeader>
              <b>{formatDateToRelativeOrMMMDDForm(date, todaysDate())}</b>
            </CalendarColumnHeader>
            {bookings?.map(booking => (
              <CalendarColumnCellView
                key={booking.id}
                bookingSummary={booking}
                onSelectbooking={handleClickBooking}
              />
            ))}
          </CalendarColumn>
        ))}
      </CalendarView>
      <Button className='calendar-day-switch-button' onClick={handleNextDay}>
        <b>{'>'}</b>
      </Button>
    </div>
  )
}
