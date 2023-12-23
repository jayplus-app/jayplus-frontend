import BookingTimeslot from 'lib/interfaces/BookingTimeslots'
import { extractTimeFromISOString } from 'lib/utils/date'

export default function CalendarColumnCellInput({
  timeslot,
  active,
  disabled,
  onSelectTimeslot,
}: {
  timeslot: BookingTimeslot
  active: boolean
  disabled: boolean
  onSelectTimeslot: (datetime: string) => void
}) {
  return (
    <label
      className={`calendar-column-cell-input ${active ? 'checked' : ''} ${
        disabled ? 'disabled' : ''
      }`}
      onClick={() => !disabled && onSelectTimeslot(timeslot.startTime)}
    >
      <input
        type='radio'
        name='bookingTimeslots'
        value={timeslot.startTime}
        checked={active}
        disabled={disabled}
        readOnly
      />
      <span>{extractTimeFromISOString(timeslot.startTime)}</span>
    </label>
  )
}
