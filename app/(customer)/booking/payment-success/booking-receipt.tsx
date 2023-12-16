import BookingReceipt from 'lib/interfaces/BookingReceipt'
import {
  extractDateFromISOString,
  extractTimeFromISOString,
} from 'lib/utils/date'
import { InvoiceTD, InvoiceTR, InvoiceTable } from 'ui/table/InvoiceTable'

export default function BookingReceipt({
  bookingReceipt,
}: {
  bookingReceipt: BookingReceipt
}) {
  return (
    <div id='booking-receipt'>
      <InvoiceTable>
        <InvoiceTR>
          <InvoiceTD>Booking Number</InvoiceTD>
          <InvoiceTD>{bookingReceipt.bookingID}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Bill Number</InvoiceTD>
          <InvoiceTD>{bookingReceipt.billNumber}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Vehicle Type</InvoiceTD>
          <InvoiceTD>{bookingReceipt.vehicleType}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Service Type</InvoiceTD>
          <InvoiceTD>{bookingReceipt.serviceType}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Date</InvoiceTD>
          <InvoiceTD>
            {extractDateFromISOString(bookingReceipt.datetime)}
          </InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Time</InvoiceTD>
          <InvoiceTD>
            {extractTimeFromISOString(bookingReceipt.datetime)}
          </InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Service Cost</InvoiceTD>
          <InvoiceTD>{bookingReceipt.serviceCost}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Discount</InvoiceTD>
          <InvoiceTD>{bookingReceipt.discount}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Total</InvoiceTD>
          <InvoiceTD>{bookingReceipt.total}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Deposit</InvoiceTD>
          <InvoiceTD>{bookingReceipt.deposit}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Remaining</InvoiceTD>
          <InvoiceTD>{bookingReceipt.remaining}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Status</InvoiceTD>
          <InvoiceTD>{bookingReceipt.status}</InvoiceTD>
        </InvoiceTR>
      </InvoiceTable>
    </div>
  )
}
