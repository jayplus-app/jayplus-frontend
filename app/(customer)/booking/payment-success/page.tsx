import { fetchBookingReceipt } from 'lib/data/payment'
import BookingReceipt from './BookingReceipt'
import Button from 'ui/button/button'
import Link from 'next/link'

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    bookingID?: string
  }
}) {
  const bookingIDInt = Number(searchParams?.bookingID || '0')

  if (bookingIDInt === 0) {
    return <div>Invalid booking ID</div>
  }

  const bookingReceipt = await fetchBookingReceipt(bookingIDInt)

  return (
    <div id='payment-success-page'>
      <div className='container'>
        <h2 id='title'>PAYMENT SUCCESSFUL!</h2>
        <BookingReceipt bookingReceipt={bookingReceipt} />
        <div className='back-to-booking'>
          <Link href='/booking'>
            <Button className='back-to-booking-button'>Back to Booking</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
