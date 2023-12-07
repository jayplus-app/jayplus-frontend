'use client'
import { useBookingSelectionContext } from 'lib/context/booking-context/BookingSelectionContext'

export default function ServiceTypeDescription() {
  const { serviceTypes, selectedServiceTypeID } = useBookingSelectionContext()

  return (
    <div>
      {
        serviceTypes.find(
          serviceType => `st-${serviceType.id}` === selectedServiceTypeID
        )?.description
      }
    </div>
  )
}
