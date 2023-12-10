'use client'

import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'
import Description from 'ui/text-field/Description'
import TypeSelection from 'ui/selection/TypeSelection'

export default function VehicleTypeSelection() {
  const { vehicleTypes, selectedVehicleTypeID, setSelectedVehicleTypeID } =
    useBookingSelectionContext()

  const handleVehicleTypeSelect = (id: number) => {
    setSelectedVehicleTypeID(id)
  }

  const description = vehicleTypes.find(
    vehicleType => vehicleType.id === selectedVehicleTypeID
  )?.description

  return (
    <div>
      <h1>Vehicle Types</h1>
      <TypeSelection
        name='vehicleType'
        typeList={vehicleTypes}
        selectedTypeID={selectedVehicleTypeID}
        onSelectType={handleVehicleTypeSelect}
      />
      <Description>{description}</Description>
    </div>
  )
}
