'use client'

import Description from 'ui/text-field/Description'
import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'
import TypeSelection from 'ui/selection/TypeSelection'

export default function ServiceTypeSelection() {
  const { serviceTypes, selectedServiceTypeID, setSelectedServiceTypeID } =
    useBookingSelectionContext()

  const description = serviceTypes.find(
    serviceType => serviceType.id === selectedServiceTypeID
  )?.description

  return (
    <div>
      <h1>Service Types</h1>
      <TypeSelection
        name='serviceType'
        typeList={serviceTypes}
        selectedTypeID={selectedServiceTypeID}
        onSelectType={setSelectedServiceTypeID}
      />
      <Description>{description}</Description>
    </div>
  )
}
