import ServiceType from 'lib/interfaces/ServiceType'

export default function ServiceTypeDescription({
  serviceTypes,
}: {
  serviceTypes: ServiceType[]
}) {
  return <div>{serviceTypes[0].description}</div>
}
