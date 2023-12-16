import { createPaymentIntent } from 'lib/data/payment'

import BookingInvoice from './booking-invoice'
import PaymentForm from './payment-form'

export default async function PaymentPage({
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
