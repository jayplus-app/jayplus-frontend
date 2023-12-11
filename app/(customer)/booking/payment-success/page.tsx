import { fetchBookingReceipt } from 'lib/data/payment'
import {
  extractDateFromISOString,
  extractTimeFromISOString,
} from 'lib/utils/date'

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    bookingID?: string
  }
}) {
  const bookingIDInt = Number(searchParams?.bookingID || '0')

  if (bookingIDInt === 0) {
    return <div>Invalid booking ID</div>
  }

  const bookingReceipt = await fetchBookingReceipt(bookingIDInt)

  return (
    <div>
      <h1>Payment Success!</h1>
      <table>
        <tbody>
          <tr>
            <td>Booking Number</td>
            <td>{bookingReceipt.bookingID}</td>
          </tr>
          <tr>
            <td>Bill Number</td>
            <td>{bookingReceipt.billNumber}</td>
          </tr>
          <tr>
            <td>Vehicle Type</td>
            <td>{bookingReceipt.vehicleType}</td>
          </tr>
          <tr>
            <td>Service Type</td>
            <td>{bookingReceipt.serviceType}</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>{extractDateFromISOString(bookingReceipt.datetime)}</td>
          </tr>
          <tr>
            <td>Time</td>
            <td>{extractTimeFromISOString(bookingReceipt.datetime)}</td>
          </tr>
          <tr>
            <td>Service Cost</td>
            <td>{bookingReceipt.serviceCost}</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>{bookingReceipt.discount}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{bookingReceipt.total}</td>
          </tr>
          <tr>
            <td>Deposit</td>
            <td>{bookingReceipt.deposit}</td>
          </tr>
          <tr>
            <td>Remaining</td>
            <td>{bookingReceipt.remaining}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{bookingReceipt.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
