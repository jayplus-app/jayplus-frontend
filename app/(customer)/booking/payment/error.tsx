'use client'

import Link from 'next/link'

import Button from 'ui/button/button'

export default function PaymentPageError({
  error,
}: {
  error: Error & { digest?: string }
}) {
  return (
    <div>
      <h2>{error.message}</h2>
      <div className='back-to-booking'>
        <Link href='/booking'>
          <Button className='back-to-booking-button'>Back to Booking</Button>
        </Link>
      </div>
    </div>
  )
}
