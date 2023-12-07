import { apiUrl } from 'lib/utils/env'
import ServiceType from 'lib/interfaces/ServiceType'
import { getSubdomain } from 'lib/utils/url'
import { unstable_noStore as noStore } from 'next/cache'

export async function fetchServiceTypes(): Promise<ServiceType[]> {
  noStore()
  try {
    const subdomain = getSubdomain()
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Business-Name': subdomain,
      },
    }
    const res = await fetch(`${apiUrl}/booking/service-types`, options)
    const data: ServiceType[] = await res.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch service types data. catch')
  }
}
