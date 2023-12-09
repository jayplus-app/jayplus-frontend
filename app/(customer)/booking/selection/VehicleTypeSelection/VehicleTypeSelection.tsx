import VehivleTypeList from './VehicleTypeList'
import VehicleType from 'lib/interfaces/VehicleType'
import Description from 'ui/text-field/Description'

export default async function VehicleTypeSelection({
  vehicleTypes,
  selectedVehicleTypeID,
}: {
  vehicleTypes: VehicleType[]
  selectedVehicleTypeID: number
}) {
  const description = vehicleTypes.find(
    vehicleType => vehicleType.id === selectedVehicleTypeID
  )?.description

  return (
    <div>
      <h1>Vehicle Types</h1>
      <VehivleTypeList
        vehicleTypes={vehicleTypes}
        selectedVehicleTypeID={selectedVehicleTypeID}
      />
      <Description>{description}</Description>
    </div>
  )
}
