'use client'

import { useStyleContext } from 'context/style-context/StyleContext'
import { addDaysToDate, todaysDate } from 'lib/utils/date'
import { useState } from 'react'
import Button from 'ui/button/button'
import CalendarColumn from './CalendarColumn'

export default function CalendarView() {
  const [startDate, setStartDate] = useState<string>(todaysDate())
  const { widthMode } = useStyleContext()

  const numColumns = widthMode === 'sm' ? 3 : 5

  const dates = []
  for (let i = 0; i < numColumns; i++) {
    dates.push(addDaysToDate(startDate, i))
  }

  return (
    <div>
      <Button>Prev Day</Button>
      {dates.map(date => (
        <CalendarColumn key={date} date={date} />
      ))}
      <Button>Next Day</Button>
    </div>
  )
}
