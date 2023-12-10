'use client'

import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'
import { createBooking } from 'lib/data/booking'
import { useEffect, useState } from 'react'
import Button from 'ui/button/button'

export default function CreateBooking() {
  const [disabled, setDisabled] = useState<boolean>(true)
  const { selectedVehicleTypeID, selectedServiceTypeID, selectedDatetime } =
    useBookingSelectionContext()

  useEffect(() => {
    if (
      selectedVehicleTypeID &&
      selectedServiceTypeID &&
      selectedDatetime !== ''
    ) {
      setDisabled(false)
    }
  }, [selectedVehicleTypeID, selectedServiceTypeID, selectedDatetime])

  const handleCreateBooking = () => {
    createBooking(
      selectedVehicleTypeID,
      selectedServiceTypeID,
      selectedDatetime
    )
      .then(booking => {
        alert(`Booking created: ${booking.id}`)
      })
      .catch(error => {
        alert(error)
      })
  }

  return (
    <div>
      <Button onClick={handleCreateBooking} disabled={disabled}>
        Book
      </Button>
    </div>
  )
}
