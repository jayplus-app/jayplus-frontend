import ServiceType from 'lib/interfaces/ServiceType'
import Description from 'ui/text-field/Description'
import { ServiceTypeList } from './ServiceTypeList'

export default async function ServiceTypeSelection({
  serviceTypes,
  selectedServiceTypeID,
}: {
  serviceTypes: ServiceType[]
  selectedServiceTypeID: number
}) {
  const description = serviceTypes.find(
    serviceType => serviceType.id === selectedServiceTypeID
  )?.description

  return (
    <div>
      <h1>Service Types</h1>
      <ServiceTypeList
        serviceTypes={serviceTypes}
        selectedServiceTypeID={selectedServiceTypeID}
      />
      <Description>{description}</Description>
    </div>
  )
}
