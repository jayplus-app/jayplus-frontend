import { fetchTest } from 'lib/api/fetchVehicleTypes'

export default async function VehicleTypeSelection() {
  const testData = await fetchTest()
  return (
    <div>
      <h1>Vehicle Types</h1>
      <p>{testData.message}</p>
    </div>
  )
}
