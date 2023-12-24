import { MdClose } from 'react-icons/md'
import Button from 'ui/button/button'
import Modal from 'ui/modal/modal'

export default function ConfirmCancelBookingModal({
  isOpen,
  onClose,
  onConfirmCancelBooking,
  bookingID,
}: {
  isOpen: boolean
  onClose: () => void
  onConfirmCancelBooking: (id: number) => void
  bookingID: number
}) {
  return (
    <Modal
      className='confirm-cancel-booking-modal'
      isOpen={isOpen}
      onClose={onClose}
    >
      <p>Are you sure you want to cancel booking {bookingID}?</p>
      <div className='modal-buttons'>
        <Button className='no-button' onClick={onClose}>
          No
        </Button>
        <Button
          className='yes-button'
          onClick={() => onConfirmCancelBooking(bookingID)}
        >
          Yes, Cancel Booking
        </Button>
      </div>
    </Modal>
  )
}
