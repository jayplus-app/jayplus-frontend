'use client'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import CheckoutForm from './CheckoutForm'
import { stripePublicKey } from 'lib/utils/env'

const stripePromise = loadStripe(stripePublicKey || '')

export default function PaymentForm({
  clientSecret,
  bookingID,
}: {
  clientSecret: string
  bookingID: number
}) {
  const appearance = {
    theme: 'stripe' as const,
  }
  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm bookingID={bookingID} />
        </Elements>
      )}
    </div>
  )
}
