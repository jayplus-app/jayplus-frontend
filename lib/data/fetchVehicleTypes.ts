import { apiUrl } from 'lib/utils/env'
import VehicleType from 'lib/interfaces/VehicleType'
import { getSubdomain } from 'lib/utils/url'
import { unstable_noStore as noStore } from 'next/cache'

export async function fetchVehicleTypes(): Promise<VehicleType[]> {
  noStore()
  try {
    const subdomain = await getSubdomain()

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Business-Name': subdomain,
      },
    }

    const res = await fetch(`${apiUrl}/booking/vehicle-types`, options)
    const data: VehicleType[] = await res.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch vehicle types data. catch')
  }
}
