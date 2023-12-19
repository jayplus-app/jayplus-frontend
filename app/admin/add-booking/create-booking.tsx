'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'
import { createBookingAdmin } from 'lib/data/booking'
import Button from 'ui/button/button'

export default function CreateBooking() {
  const [disabled, setDisabled] = useState<boolean>(true)
  const { selectedVehicleTypeID, selectedServiceTypeID, selectedDatetime } =
    useBookingSelectionContext()

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
    createBookingAdmin(
      selectedVehicleTypeID,
      selectedServiceTypeID,
      selectedDatetime
    )
      .then(booking => {
        if (booking) {
          console.log('booking created', booking)
        }
      })
      .catch(error => {
        alert(error)
      })
  }

  return (
    <div id='create-booking'>
      <form>
        <Button
          id='create-booking-button'
          type='submit'
          onClick={handleCreateBooking}
          disabled={disabled}
        >
          Book
        </Button>
      </form>
    </div>
  )
}
