'use client'
import { useBookingSelectionContext } from 'context/booking-context/BookingSelectionContext'

export default function ServiceTypeDescription() {
  const { serviceTypes, selectedServiceTypeID } = useBookingSelectionContext()

  return (
    <div>
      {
        serviceTypes.find(
          serviceType => serviceType.id === selectedServiceTypeID
        )?.description
      }
    </div>
  )
}
