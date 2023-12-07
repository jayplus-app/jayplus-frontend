'use client'
import VehicleType from 'lib/interfaces/VehicleType'
import { useState, ChangeEvent } from 'react'
export default function VehicleTypeList({
  vehicleTypes,
}: {
  vehicleTypes: VehicleType[]
}) {
  const [selectedVehicleTypeID, setSelectedVehicleTypeID] = useState<number>(
    vehicleTypes[0].id
  )

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
