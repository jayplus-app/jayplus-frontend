import { fetchVehicleTypes } from 'lib/data/fetchVehicleTypes'
import VehivleTypeList from './VehicleTypeList'
import VehicleTypeDescription from './VehicleTypeDescription'

export default async function VehicleTypeSelection() {
  const vehicleTypes = await fetchVehicleTypes()

  if (vehicleTypes.length === undefined || vehicleTypes.length === 0) {
    return <div>No vehicle types found</div>
  }

  return (
    <div>
      <h1>Vehicle Types</h1>
      <VehivleTypeList vehicleTypes={vehicleTypes} />
      <VehicleTypeDescription vehicleTypes={vehicleTypes} />
    </div>
  )
}
