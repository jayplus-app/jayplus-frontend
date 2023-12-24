'use client'

import { useCallback, useEffect, useState } from 'react'

import { fetchBookings } from 'lib/data/booking'
import BookingSummary from 'lib/interfaces/BookingSummary'
import {
  addDaysToDate,
  formatDateToRelativeOrMMMDDForm,
  todaysDate,
} from 'lib/utils/date'

import Button from 'ui/button/button'
import CalendarColumn from 'ui/calendar/CalendarColumn'
import CalendarColumnCellView from 'ui/calendar/CalendarColumnCellView'
import CalendarColumnHeader from 'ui/calendar/CalendarColumnHeader'
import CalendarView from 'ui/calendar/CalendarView'

export default function BookingsCalendarView({
  onSelectBooking,
}: {
  onSelectBooking: (id: number) => void
}) {
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

  const handleTodayButtonClick = () => {
    setCalendarStartDate(todaysDate())
  }

  return (
    <div id='bookings-calendar-view'>
      <div id='today'>
        <Button onClick={handleTodayButtonClick}>Today</Button>
      </div>
      <div id='calendar'>
        <Button
          className='calendar-day-switch-button'
          onClick={handlePreviousDay}
          disabled={calendarStartDate <= addDaysToDate(todaysDate(), -30)}
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
                  onSelectbooking={onSelectBooking}
                />
              ))}
            </CalendarColumn>
          ))}
        </CalendarView>
        <Button
          className='calendar-day-switch-button'
          onClick={handleNextDay}
          disabled={calendarStartDate >= addDaysToDate(todaysDate(), 30)}
        >
          <b>{'>'}</b>
        </Button>
      </div>
    </div>
  )
}
