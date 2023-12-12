import BookingTimeslot from 'lib/interfaces/BookingTimeslots'
import { extractTimeFromISOString } from 'lib/utils/date'

export default function CalendarColumnCellInput({
  timeslot,
  active,
  onSelectTimeslot,
}: {
  timeslot: BookingTimeslot
  active: boolean
  onSelectTimeslot: (datetime: string) => void
}) {
  return (
    <label
      className={`calendar-column-input-cell ${active ? 'checked' : ''}`}
      onClick={() => onSelectTimeslot(timeslot.startTime)}
    >
      <input
        type='radio'
        name='bookingTimeslots'
        value={timeslot.startTime}
        checked={active}
        readOnly
      />
      <span>{extractTimeFromISOString(timeslot.startTime)}</span>
    </label>
  )
}
