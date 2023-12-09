import { apiUrl } from 'lib/utils/env'
import { getSubdomain } from 'lib/utils/url'
import { unstable_noStore as noStore } from 'next/cache'
import VehicleType from 'lib/interfaces/VehicleType'
import ServiceType from 'lib/interfaces/ServiceType'
import BookingTimeslot from 'lib/interfaces/BookingTimeslots'

/**
 * Fetches the vehicle types data from the server.
 * Includes the subdomain which is the business name in the request header.
 * @returns {Promise<VehicleType[]>} A promise that resolves to an array of vehicle types.
 * @throws {Error} If there is an error while fetching the data.
 */
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

/**
 * Fetches the service types data from the server.
 * Includes the subdomain which is the business name in the request header.
 * @returns {Promise<ServiceType[]>} A promise that resolves to an array of service types.
 * @throws {Error} If there is an error while fetching the data.
 */
export async function fetchServiceTypes(): Promise<ServiceType[]> {
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
    const res = await fetch(`${apiUrl}/booking/service-types`, options)
    const data: ServiceType[] = await res.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch service types data. catch')
  }
}

/**
 * Fetches the booking timeslots data from the server.
 * Includes the subdomain which is the business name in the request header.
 * @param {string} datetime - The date and time in the format "yyyy-mm-dd hh:mm:ss".
 * @param {string} vehicleTypeID - The ID of the vehicle type.
 * @param {string} serviceTypeID - The ID of the service type.
 * @returns {Promise<BookingTimeslot[]>} A promise that resolves to an array of booking timeslots.
 * @throws {Error} If there is an error while fetching the data.
 */
export async function fetchBookingTimeslots(
  date: string,
  vehicleTypeID: number,
  serviceTypeID: number
): Promise<BookingTimeslot[]> {
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
    const res = await fetch(
      `${apiUrl}/booking/timeslots?date=${date}&vehicleTypeID=${vehicleTypeID}&serviceTypeID=${serviceTypeID}`,
      options
    )
    const data: BookingTimeslot[] = await res.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch booking timeslots data. catch')
  }
}
