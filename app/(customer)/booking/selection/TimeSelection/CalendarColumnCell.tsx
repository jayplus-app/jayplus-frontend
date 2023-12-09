'use client'

import { useUpdateQueryParams } from 'hooks/useUpdateQueryParams'
import BookingTimeslot from 'lib/interfaces/BookingTimeslots'
import Link from 'next/link'

export default function CalendarColumnCell({
  timeslot,
  active,
}: {
  timeslot: BookingTimeslot
  active: boolean
}) {
  const updateQueryParams = useUpdateQueryParams()

  return (
    <Link href={updateQueryParams('datetime', timeslot.startTime)}>
      <input
        type='radio'
        name='bookingTimeslots'
        value={timeslot.startTime}
        checked={active}
        readOnly
      />
      {timeslot.startTime}
    </Link>
  )
}
