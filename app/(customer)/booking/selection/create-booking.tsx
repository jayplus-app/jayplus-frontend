'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'
import { createBooking } from 'lib/data/booking'
import Button from 'ui/button/button'

export default function CreateBooking() {
  const [disabled, setDisabled] = useState<boolean>(true)
  const {
    selectedVehicleTypeID,
    selectedServiceTypeID,
    selectedDatetime,
    setDefaultValues,
  } = useBookingSelectionContext()

  const router = useRouter()

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
    createBooking(
      selectedVehicleTypeID,
      selectedServiceTypeID,
      selectedDatetime
    )
      .then(booking => {
        setDefaultValues()
        router.push(`/booking/payment?bookingID=${booking.id}`)
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
