import BookingInvoice from 'lib/interfaces/BookingInvoice'
import {
  extractDateFromISOString,
  extractTimeFromISOString,
} from 'lib/utils/date'
import { InvoiceTD, InvoiceTR, InvoiceTable } from 'ui/table/InvoiceTable'

export default function BookingInvoice({
  bookingInvoice,
}: {
  bookingInvoice: BookingInvoice
}) {
  return (
    <div className='booking-invoice'>
      <InvoiceTable>
        <InvoiceTR>
          <InvoiceTD>Booking Number</InvoiceTD>
          <InvoiceTD>{bookingInvoice.bookingID}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Vehicle Type</InvoiceTD>
          <InvoiceTD>{bookingInvoice.vehicleType}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Service Type</InvoiceTD>
          <InvoiceTD>{bookingInvoice.serviceType}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Date</InvoiceTD>
          <InvoiceTD>
            {extractDateFromISOString(bookingInvoice.datetime)}
          </InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Time</InvoiceTD>
          <InvoiceTD>
            {extractTimeFromISOString(bookingInvoice.datetime)}
          </InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Service Cost</InvoiceTD>
          <InvoiceTD>{bookingInvoice.serviceCost}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Discount</InvoiceTD>
          <InvoiceTD>{bookingInvoice.discount}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Total</InvoiceTD>
          <InvoiceTD>{bookingInvoice.total}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Deposit</InvoiceTD>
          <InvoiceTD>{bookingInvoice.deposit}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Remaining</InvoiceTD>
          <InvoiceTD>{bookingInvoice.remaining}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Status</InvoiceTD>
          <InvoiceTD>{bookingInvoice.status}</InvoiceTD>
        </InvoiceTR>
      </InvoiceTable>
    </div>
  )
}
