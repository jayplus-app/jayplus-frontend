'use client'

import CalendarColumnHeader from './CalendarColumnHeader'

export default function CalendarColumn({ date }: { date: string }) {
  return (
    <div>
      <CalendarColumnHeader>{date}</CalendarColumnHeader>
    </div>
  )
}
