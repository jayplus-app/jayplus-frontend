'use client'

import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'
import { fetchServiceCost } from 'lib/data/booking'
import { formatPriceFromCentsToDollarsString } from 'lib/utils/price'
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
    <div className='service-cost'>
      <span>
        Service Cost: <b>${formatPriceFromCentsToDollarsString(serviceCost)}</b>
      </span>
    </div>
  )
}
