'use client'

import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'
import { fetchServiceCost } from 'lib/data/booking'
import { useEffect, useState } from 'react'

export default function ServiceCost() {
  const { selectedVehicleTypeID, selectedServiceTypeID } =
    useBookingSelectionContext()
  const [serviceCost, setServiceCost] = useState<number>(0)

  useEffect(() => {
    fetchServiceCost(selectedVehicleTypeID, selectedServiceTypeID).then(
      serviceCost => {
        setServiceCost(serviceCost.price)
      }
    )
  }, [selectedVehicleTypeID, selectedServiceTypeID])

  return (
    <div>
      <div>Service Cost: {serviceCost}</div>
    </div>
  )
}