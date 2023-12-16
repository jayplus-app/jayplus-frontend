'use client'

import { useEffect, useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

import { getURLOrigin } from 'lib/utils/url'
import Button from 'ui/button/button'

export default function CheckoutForm({ bookingID }: { bookingID: number }) {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!stripe || !elements) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    )

    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('Payment succeeded!')
          break
        case 'processing':
          setMessage('Your payment is processing.')
          break
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.')
          break
        default:
          setMessage('Something went wrong.')
          break
      }
    })
  }, [stripe])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    const urlOrigin = getURLOrigin()

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${urlOrigin}/booking/payment-success?bookingID=${bookingID}`,
      },
    })

    if (error?.type === 'card_error' || error?.type === 'validation_error') {
      setMessage(error.message || '')
    } else {
      setMessage('An unexpected error occurred.')
    }

    setIsLoading(false)
  }

  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      {message && <div id='payment-message'>{message}</div>}
      <PaymentElement id='payment-element' options={{ layout: 'tabs' }} />
      <Button disabled={isLoading || !stripe || !elements} id='submit'>
        <span id='button-text'>
          {isLoading ? (
            <div className='spinner' id='spinner'>
              loading
            </div>
          ) : (
            'Pay Now'
          )}
        </span>
      </Button>
    </form>
  )
}
