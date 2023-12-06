import { apiUrl } from 'lib/utils/env'
import VehicleType from 'lib/interfaces/VehicleType'

export async function fetchVehicleTypes(): Promise<VehicleType[]> {
  try {
    const response = await fetch('/api/booking/vehicle-types')
    const data: VehicleType[] = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch vehicle types data.')
  }
}

export async function fetchTest() {
  try {
    const response = await fetch(`${apiUrl}/booking/test`)
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}
