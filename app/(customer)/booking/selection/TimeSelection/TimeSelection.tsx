import BookingTimeslot from 'lib/interfaces/BookingTimeslots'
import CalendarColumnCell from './CalendarColumnCell'
import CalendarColumn from './CalendarColumn'
import CalendarColumnHeader from './CalendarColumnHeader'
import CalendarView from './CalendarView'

export default function TimeSelection({
  bookingTimeslots,
  selectedDatetime,
}: {
  bookingTimeslots: { [date: string]: BookingTimeslot[] }
  selectedDatetime: string
}) {
  return (
    <div>
      <h1>Time Selection</h1>
      <CalendarView>
        {Object.entries(bookingTimeslots).map(([date, timeslots]) => (
          <CalendarColumn key={date}>
            <CalendarColumnHeader>{date}</CalendarColumnHeader>
            {bookingTimeslots[date].map(timeslot => (
              <CalendarColumnCell
                key={timeslot.startTime}
                timeslot={timeslot}
                active={timeslot.startTime === selectedDatetime}
              />
            ))}
          </CalendarColumn>
        ))}
      </CalendarView>
    </div>
  )
}
