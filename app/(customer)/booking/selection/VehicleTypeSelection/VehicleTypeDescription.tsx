'use client'
import VehicleType from 'lib/interfaces/VehicleType'

export default function VehicleTypeDescription({
  vehicleTypes,
}: {
  vehicleTypes: VehicleType[]
}) {
  return <div>{vehicleTypes[0].description}</div>
}
