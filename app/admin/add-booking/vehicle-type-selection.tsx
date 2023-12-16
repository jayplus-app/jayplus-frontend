'use client'

import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'
import TypeSelection from 'ui/selection/TypeSelection'
import Description from 'ui/text-field/Description'

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
      <p>Select your vehicle type</p>
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
