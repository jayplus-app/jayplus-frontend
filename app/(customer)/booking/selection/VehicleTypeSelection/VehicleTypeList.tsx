'use client'
import { ChangeEvent } from 'react'
import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'

export default function VehicleTypeList() {
  const { vehicleTypes, selectedVehicleTypeID, setSelectedVehicleTypeID } =
    useBookingSelectionContext()

  const handleSelectVehicleType = (id: number) => {
    setSelectedVehicleTypeID(id)
  }

  return (
    <div>
      {vehicleTypes.map(vehicleType => (
        <label key={vehicleType.id}>
          <input
            type='radio'
            name='vehicleType'
            value={vehicleType.id}
            checked={selectedVehicleTypeID === vehicleType.id}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleSelectVehicleType(Number(e.target.value))
            }
          />
          {vehicleType.name}
        </label>
      ))}
    </div>
  )
}
