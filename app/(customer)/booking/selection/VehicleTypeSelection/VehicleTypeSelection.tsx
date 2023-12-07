import VehivleTypeList from './VehicleTypeList'
import VehicleTypeDescription from './VehicleTypeDescription'

export default async function VehicleTypeSelection() {
  return (
    <div>
      <h1>Vehicle Types</h1>
      <VehivleTypeList />
      <VehicleTypeDescription />
    </div>
  )
}
