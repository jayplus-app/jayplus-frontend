import { BookingSelectionProvider } from 'context/booking-context/BookingSelectionContext'
import { fetchServiceTypes, fetchVehicleTypes } from 'lib/data/booking'

import VehicleTypeSelection from './vehicle-type-selection'
import ServiceTypeSelection from './service-type-selection'
import TimeSelection from './time-selection'
import ServiceCost from './service-cost'
import CreateBooking from './create-booking'

export default async function Page() {
  const vehicleTypes = await fetchVehicleTypes()
  const serviceTypes = await fetchServiceTypes()

  if (vehicleTypes.length === undefined || vehicleTypes.length === 0) {
    return <div>No vehicle types found</div>
  }

  if (serviceTypes.length === undefined || serviceTypes.length === 0) {
    return <div>No service types found</div>
  }

  return (
    <BookingSelectionProvider
      vehicleTypes={vehicleTypes}
      serviceTypes={serviceTypes}
    >
      <div id='add-booking-page'>
        <VehicleTypeSelection />
        <ServiceTypeSelection />
        <TimeSelection />
        <div id='footer'>
          <ServiceCost />
          <CreateBooking />
        </div>
      </div>
    </BookingSelectionProvider>
  )
}
