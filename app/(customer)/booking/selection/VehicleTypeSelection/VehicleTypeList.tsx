'use client'

import VehicleType from 'lib/interfaces/VehicleType'
import Link from 'next/link'
import { useUpdateQueryParams } from 'hooks/useUpdateQueryParams'

export default function VehicleTypeList({
  vehicleTypes,
  selectedVehicleTypeID,
}: {
  vehicleTypes: VehicleType[]
  selectedVehicleTypeID: number
}) {
  const updateQueryParams = useUpdateQueryParams()

  return (
    <div>
      {vehicleTypes.map(vehicleType => (
        <Link
          key={vehicleType.id}
          href={updateQueryParams('vehicleTypeID', vehicleType.id)}
        >
          <label key={vehicleType.id}>
            <input
              type='radio'
              name='vehicleType'
              value={vehicleType.id}
              checked={selectedVehicleTypeID === vehicleType.id}
              readOnly
            />
            {vehicleType.name}
          </label>
        </Link>
      ))}
    </div>
  )
}
