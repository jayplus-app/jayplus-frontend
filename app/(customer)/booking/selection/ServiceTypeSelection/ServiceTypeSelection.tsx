import { ServiceTypeList } from './ServiceTypeList'
import ServiceTypeDescription from './ServiceTypeDescription'

export default async function ServiceTypeSelection() {
  return (
    <div>
      <h1>Service Types</h1>
      <ServiceTypeList />
      <ServiceTypeDescription />
    </div>
  )
}
