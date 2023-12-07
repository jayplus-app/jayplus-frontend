'use client'
import { useBookingSelectionContext } from 'lib/context/booking-context/BookingSelectionContext'

export default function VehicleTypeDescription() {
  const { vehicleTypes, selectedVehicleTypeID: vehicleTypeSelectedID } =
    useBookingSelectionContext()

  return (
    <div>
      {
        vehicleTypes.find(
          vehicleType => `vt-${vehicleType.id}` === vehicleTypeSelectedID
        )?.description
      }
    </div>
  )
}
