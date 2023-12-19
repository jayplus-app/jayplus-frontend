'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'
import { createBookingAdmin } from 'lib/data/booking'
import Button from 'ui/button/button'

export default function CreateBooking() {
  const [disabled, setDisabled] = useState<boolean>(true)
  const {
    selectedVehicleTypeID,
    selectedServiceTypeID,
    selectedDatetime,
    setDefaultValues,
  } = useBookingSelectionContext()

  useEffect(() => {
    if (
      selectedVehicleTypeID &&
      selectedServiceTypeID &&
      selectedDatetime !== ''
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [selectedVehicleTypeID, selectedServiceTypeID, selectedDatetime])

  const handleCreateBooking = () => {
    createBookingAdmin(
      selectedVehicleTypeID,
      selectedServiceTypeID,
      selectedDatetime
    )
      .then(booking => {
        if (booking) {
          alert('booking created with id: ' + booking.id)
          setDefaultValues()
        }
      })
      .catch(error => {
        alert(error)
      })
  }

  return (
    <div id='create-booking'>
      <Button
        id='create-booking-button'
        onClick={handleCreateBooking}
        disabled={disabled}
      >
        Book
      </Button>
    </div>
  )
}
