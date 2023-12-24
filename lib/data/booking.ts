'use server'
import { cookies } from 'next/headers'
import { apiUrl } from 'lib/utils/env'
import { getSubdomain } from 'lib/utils/url'
import { unstable_noStore as noStore } from 'next/cache'
import VehicleType from 'lib/interfaces/VehicleType'
import ServiceType from 'lib/interfaces/ServiceType'
import BookingTimeslot from 'lib/interfaces/BookingTimeslots'
import ServiceCost from 'lib/interfaces/ServiceCost'
import Booking from 'lib/interfaces/Booking'
import BookingSummary from 'lib/interfaces/BookingSummary'
import BookingReceipt from 'lib/interfaces/BookingReceipt'

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
    const data = await res.json()

    if (data.error) {
      throw new Error(data.message)
    }

    return data as VehicleType[]
  } catch (error) {
    throw error
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
    const data = await res.json()

    if (data.error) {
      throw new Error(data.message)
    }

    return data as ServiceType[]
  } catch (error) {
    throw error
  }
}

/**
 * Fetches the booking timeslots data from the server.
 * Includes the subdomain which is the business name in the request header.
 * @param {string} datetime - The date and time in the format "yyyy-mm-dd hh:mm:ss".
 * @param {number} vehicleTypeID - The ID of the vehicle type.
 * @param {number} serviceTypeID - The ID of the service type.
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
    const data = await res.json()

    if (data.error) {
      throw new Error(data.message)
    }

    return data as BookingTimeslot[]
  } catch (error) {
    throw error
  }
}

/**
 * Fetches the service cost data from the server.
 * Includes the subdomain which is the business name in the request header.
 * @param {number} vehicleTypeID - The ID of the vehicle type.
 * @param {number} serviceTypeID - The ID of the service type.
 * @returns {Promise<ServiceCost>} A promise that resolves to the service cost.
 * @throws {Error} If there is an error while fetching the data.
 */
export async function fetchServiceCost(
  vehicleTypeID: number,
  serviceTypeID: number
): Promise<ServiceCost> {
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
      `${apiUrl}/booking/service-cost?vehicleTypeID=${vehicleTypeID}&serviceTypeID=${serviceTypeID}`,
      options
    )
    const data = await res.json()

    if (data.error) {
      throw new Error(data.message)
    }

    return data as ServiceCost
  } catch (error) {
    throw error
  }
}

/**
 * Creates a booking on the server.
 * Includes the subdomain which is the business name in the request header.
 * @param {number} vehicleTypeID - The ID of the vehicle type.
 * @param {number} serviceTypeID - The ID of the service type.
 * @param {string} datetime - The date and time in the format "yyyy-mm-dd hh:mm:ss".
 * @returns {Promise<Booking>} A promise that resolves to the created booking.
 * @throws {Error} If there is an error while creating the booking.
 */
export async function createBooking(
  vehicleTypeID: number,
  serviceTypeID: number,
  datetime: string
): Promise<Booking> {
  noStore()
  try {
    const subdomain = await getSubdomain()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Business-Name': subdomain,
      },
      body: JSON.stringify({
        vehicleTypeID: vehicleTypeID.toString(),
        serviceTypeID: serviceTypeID.toString(),
        datetime,
      }),
    }
    const res = await fetch(`${apiUrl}/booking/create-booking`, options)
    const data = await res.json()

    if (data.error) {
      throw new Error(data.message)
    }

    return data as Booking
  } catch (error) {
    throw error
  }
}

export async function createBookingAdmin(
  vehicleTypeID: number,
  serviceTypeID: number,
  datetime: string
): Promise<Booking> {
  noStore()
  try {
    const subdomain = await getSubdomain()
    const access_token = cookies().get('access_token')?.value
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Business-Name': subdomain,
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        vehicleTypeID: vehicleTypeID.toString(),
        serviceTypeID: serviceTypeID.toString(),
        datetime,
      }),
    }
    const res = await fetch(`${apiUrl}/booking/create-booking-admin`, options)
    const data = await res.json()

    if (data.error) {
      throw new Error(data.message)
    }

    return data as Booking
  } catch (error) {
    throw error
  }
}

/**
 * Fetches the bookings data from the server.
 * Includes the subdomain which is the business name in the request header.
 * @returns {Promise<Booking[]>} A promise that resolves to an array of bookings.
 * @throws {Error} If there is an error while fetching the data.
 */
export async function fetchBookings(date: string): Promise<BookingSummary[]> {
  noStore()
  try {
    const subdomain = await getSubdomain()
    const access_token = cookies().get('access_token')?.value
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Business-Name': subdomain,
        Authorization: `Bearer ${access_token}`,
      },
    }
    const res = await fetch(`${apiUrl}/booking/bookings?date=${date}`, options)
    const data = await res.json()

    if (data?.error) {
      throw new Error(data.message)
    }

    return data as BookingSummary[]
  } catch (error) {
    throw error
  }
}

export async function fetchBooking(id: number): Promise<Booking> {
  noStore()
  try {
    const subdomain = await getSubdomain()
    const access_token = cookies().get('access_token')?.value
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Business-Name': subdomain,
        Authorization: `Bearer ${access_token}`,
      },
    }
    const res = await fetch(`${apiUrl}/booking/booking/${id}`, options)

    const data = await res.json()

    if (data?.error) {
      throw new Error(data.message)
    }

    return data as Booking
  } catch (error) {
    throw error
  }
}

export async function cancelBooking(id: number): Promise<string> {
  noStore()
  try {
    const subdomain = await getSubdomain()
    const access_token = cookies().get('access_token')?.value
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Business-Name': subdomain,
        Authorization: `Bearer ${access_token}`,
      },
    }
    const res = await fetch(`${apiUrl}/booking/cancel-booking/${id}`, options)

    const data = await res.json()

    if (data?.error) {
      throw new Error(data.message)
    }

    return data.message as string
  } catch (error) {
    throw error
  }
}
