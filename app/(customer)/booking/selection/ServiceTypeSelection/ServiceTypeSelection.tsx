import { fetchServiceTypes } from 'lib/data/fetchServiceTypes'
import { ServiceTypeList } from './ServiceTypeList'
import ServiceTypeDescription from './ServiceTypeDescription'

export default async function ServiceTypeSelection() {
  const serviceTypes = await fetchServiceTypes()

  if (serviceTypes.length === undefined || serviceTypes.length === 0) {
    return <div>No service types found</div>
  }

  return (
    <div>
      <h1>Service Types</h1>
      <ServiceTypeList serviceTypes={serviceTypes} />
      <ServiceTypeDescription serviceTypes={serviceTypes} />
    </div>
  )
}
