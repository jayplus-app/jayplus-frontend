'use client'
import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'

export function ServiceTypeList() {
  const { serviceTypes, selectedServiceTypeID, setSelectedServiceTypeID } =
    useBookingSelectionContext()

  const handleSelectServiceType = (id: number) => {
    setSelectedServiceTypeID(id)
  }

  return (
    <div>
      {serviceTypes.map(serviceType => (
        <label key={serviceType.id}>
          <input
            type='radio'
            name='serviceType'
            value={serviceType.id}
            checked={selectedServiceTypeID === serviceType.id}
            onChange={() => handleSelectServiceType(serviceType.id)}
          />
          {serviceType.name}
        </label>
      ))}
    </div>
  )
}
