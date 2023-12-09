'use client'

import { useUpdateQueryParams } from 'hooks/useUpdateQueryParams'
import ServiceType from 'lib/interfaces/ServiceType'
import Link from 'next/link'

export function ServiceTypeList({
  serviceTypes,
  selectedServiceTypeID,
}: {
  serviceTypes: ServiceType[]
  selectedServiceTypeID: number
}) {
  const updateQueryParams = useUpdateQueryParams()

  return (
    <div>
      {serviceTypes.map(serviceType => (
        <Link
          key={serviceType.id}
          href={updateQueryParams('serviceTypeID', serviceType.id)}
        >
          <label key={serviceType.id}>
            <input
              type='radio'
              name='serviceType'
              value={serviceType.id}
              checked={selectedServiceTypeID === serviceType.id}
              readOnly
            />
            {serviceType.name}
          </label>
        </Link>
      ))}
    </div>
  )
}
