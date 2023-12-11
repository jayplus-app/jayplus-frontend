import BookingInvoice from 'lib/interfaces/BookingInvoice'
import {
  extractDateFromISOString,
  extractTimeFromISOString,
} from 'lib/utils/date'

export default function BookingInvoice({
  bookingInvoice,
}: {
  bookingInvoice: BookingInvoice
}) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Booking Number</td>
            <td>{bookingInvoice.bookingID}</td>
          </tr>
          <tr>
            <td>Vehicle Type</td>
            <td>{bookingInvoice.vehicleType}</td>
          </tr>
          <tr>
            <td>Service Type</td>
            <td>{bookingInvoice.serviceType}</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>{extractDateFromISOString(bookingInvoice.datetime)}</td>
          </tr>
          <tr>
            <td>Time</td>
            <td>{extractTimeFromISOString(bookingInvoice.datetime)}</td>
          </tr>
          <tr>
            <td>Service Cost</td>
            <td>{bookingInvoice.serviceCost}</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>{bookingInvoice.discount}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{bookingInvoice.total}</td>
          </tr>
          <tr>
            <td>Deposit</td>
            <td>{bookingInvoice.deposit}</td>
          </tr>
          <tr>
            <td>Remaining</td>
            <td>{bookingInvoice.remaining}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{bookingInvoice.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
