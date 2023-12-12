import { createPaymentIntent } from 'lib/data/payment'
import PaymentForm from './PaymentForm'
import BookingInvoice from './BookingInvoice'
import { redirect } from 'next/navigation'

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

  const { bookingInvoice, clientSecret } =
    await createPaymentIntent(bookingIDInt)

  if (bookingInvoice.status !== 'pending') {
    redirect(`/booking`)
  }

  return (
    <div id='payment-page'>
      <div className='container'>
        <BookingInvoice bookingInvoice={bookingInvoice} />
        <PaymentForm
          clientSecret={clientSecret}
          bookingID={bookingInvoice.bookingID}
        />
      </div>
    </div>
  )
}
