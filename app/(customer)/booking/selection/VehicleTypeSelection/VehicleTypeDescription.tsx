'use client'
import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'

export default function VehicleTypeDescription() {
  const { vehicleTypes, selectedVehicleTypeID: vehicleTypeSelectedID } =
    useBookingSelectionContext()

  return (
    <div>
      {
        vehicleTypes.find(
          vehicleType => vehicleType.id === vehicleTypeSelectedID
        )?.description
      }
    </div>
  )
}
