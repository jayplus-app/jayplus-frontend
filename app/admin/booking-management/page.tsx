'use client'

import { useState } from 'react'

import { cancelBooking, fetchBooking } from 'lib/data/booking'

import BookingsCalendarView from './bookings-calendar-view'
import BookingModal from './booking-modal'
import Booking from 'lib/interfaces/Booking'
import ConfirmCancelBookingModal from './confirm-cancel-booking-modal'

export default function Page() {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false)
  const [showConfirmCancelBookingModal, setShowConfirmCancelBookingModal] =
    useState<boolean>(false)

  const handleSelectBooking = (id: number) => {
    fetchBooking(id).then(booking => {
      setSelectedBooking(booking)
      setShowBookingModal(true)
    })
  }

  const handleCloseBookingModal = () => {
    setSelectedBooking(null)
    setShowBookingModal(false)
  }

  const handleCancelBooking = (id: number) => {
    setShowBookingModal(false)
    setShowConfirmCancelBookingModal(true)
  }

  const handleConfirmCancelBooking = (id: number) => {
    cancelBooking(id)
      .then(message => {
        alert(`#${id}: ${message}`)
      })
      .catch(error => {
        alert(error)
      })
      .finally(() => {
        setShowConfirmCancelBookingModal(false)
        setShowBookingModal(false)
        setSelectedBooking(null)
      })
  }
  return (
    <div id='booking-management-page'>
      {showBookingModal && selectedBooking && (
        <BookingModal
          isOpen={showBookingModal}
          onClose={handleCloseBookingModal}
          booking={selectedBooking}
          onCancelBooking={handleCancelBooking}
        />
      )}
      {showConfirmCancelBookingModal && selectedBooking && (
        <ConfirmCancelBookingModal
          isOpen={showConfirmCancelBookingModal}
          onClose={() => {
            setShowConfirmCancelBookingModal(false)
            setShowBookingModal(true)
          }}
          onConfirmCancelBooking={handleConfirmCancelBooking}
          bookingID={selectedBooking.id}
        />
      )}
      <BookingsCalendarView onSelectBooking={handleSelectBooking} />
    </div>
  )
}
