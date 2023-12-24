import {
  extractDateFromISOString,
  extractTimeFromISOString,
} from 'lib/utils/date'

import Modal from 'ui/modal/modal'
import { InvoiceTD, InvoiceTR, InvoiceTable } from 'ui/table/InvoiceTable'
import { MdDeleteForever } from 'react-icons/md'
import Booking from 'lib/interfaces/Booking'

export default function BookingModal({
  isOpen,
  booking,
  onClose,
  onCancelBooking,
}: {
  isOpen: boolean
  booking: Booking
  onClose: () => void
  onCancelBooking: (id: number) => void
}) {
  return (
    <Modal className='booking-modal' isOpen={isOpen} onClose={onClose}>
      <InvoiceTable>
        <InvoiceTR>
          <InvoiceTD>Booking Number</InvoiceTD>
          <InvoiceTD>{booking.id}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Bill Number</InvoiceTD>
          <InvoiceTD>{booking.billNumber}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Vehicle Type</InvoiceTD>
          <InvoiceTD>{booking.vehicleType}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Service Type</InvoiceTD>
          <InvoiceTD>{booking.serviceType}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Date</InvoiceTD>
          <InvoiceTD>{extractDateFromISOString(booking.datetime)}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Time</InvoiceTD>
          <InvoiceTD>{extractTimeFromISOString(booking.datetime)}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Service Cost</InvoiceTD>
          <InvoiceTD>{booking.cost}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Discount</InvoiceTD>
          <InvoiceTD>{booking.discount}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Deposit</InvoiceTD>
          <InvoiceTD>{booking.deposit}</InvoiceTD>
        </InvoiceTR>
        <InvoiceTR>
          <InvoiceTD>Status</InvoiceTD>
          <InvoiceTD>{booking.status}</InvoiceTD>
        </InvoiceTR>
      </InvoiceTable>
      <div
        className='cancel-booking'
        onClick={() => onCancelBooking(booking.id)}
      >
        <span>Cancel this booking</span>
        <MdDeleteForever size={20} />
      </div>
    </Modal>
  )
}
