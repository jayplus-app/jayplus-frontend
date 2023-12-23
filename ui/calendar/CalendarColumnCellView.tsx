import BookingSummary from 'lib/interfaces/BookingSummary'
import { extractTimeFromISOString } from 'lib/utils/date'

export default function CalendarColumnCellView({
  bookingSummary,
  onSelectbooking,
}: {
  bookingSummary: BookingSummary
  onSelectbooking: (id: number) => void
}) {
  return (
    <div
      className='calendar-column-cell-view'
      onClick={() => onSelectbooking(bookingSummary.id)}
    >
      <b>{extractTimeFromISOString(bookingSummary.datetime)}</b>
      <span>{bookingSummary.vehicleType}</span>
      <span>{bookingSummary.serviceType}</span>
    </div>
  )
}
