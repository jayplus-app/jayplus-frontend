'use client'
import ServiceType from 'lib/interfaces/ServiceType'
import { useState } from 'react'

export function ServiceTypeList({
  serviceTypes,
}: {
  serviceTypes: ServiceType[]
}) {
  const [selectedServiceTypeID, setSelectedServiceTypeID] = useState<number>(
    serviceTypes[0].id
  )

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
