import BookingInvoice from 'lib/interfaces/BookingInvoice'
import BookingReceipt from 'lib/interfaces/BookingReceipt'
import { apiUrl } from 'lib/utils/env'
import { getSubdomain } from 'lib/utils/url'
import { unstable_noStore as noStore } from 'next/cache'

/**
 * Creates a payment intent on the server.
 * Includes the subdomain which is the business name in the request header.
 * Retrieves a client secret and booking details from the server.
 * @param {number} bookingNumber - The booking number.
 * @returns {Promise<{ booking: BookingInvoice, clientSecret: string }>} A promise that resolves to the created payment intent.
 * @throws {Error} If there is an error while creating the payment intent.
 */
export async function createPaymentIntent(
  bookingNumber: number
): Promise<{ bookingInvoice: BookingInvoice; clientSecret: string }> {
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
        bookingNumber,
      }),
    }

    const res = await fetch(`${apiUrl}/payment/create-payment-intent`, options)
    const data = await res.json()

    if (data.error) {
      throw new Error(data.message)
    }

    return {
      bookingInvoice: data.bookingInvoice,
      clientSecret: data.clientSecret,
    }
  } catch (error) {
    throw error
  }
}

/**
 * Retrieves a booking receipt from the server.
 * Includes the subdomain which is the business name in the request header.
 * @param {number} bookingID - The booking number.
 * @returns {Promise<BookingReceipt>} A promise that resolves to the booking receipt.
 * @throws {Error} If there is an error while retrieving the booking receipt.
 */
export async function fetchBookingReceipt(
  bookingID: number
): Promise<BookingReceipt> {
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

    await new Promise(resolve => setTimeout(resolve, 1500))

    const res = await fetch(
      `${apiUrl}/payment/booking-receipt/${bookingID}`,
      options
    )
    const data = await res.json()

    if (data.error) {
      throw new Error(data.message)
    }

    return data as BookingReceipt
  } catch (error) {
    throw error
  }
}
