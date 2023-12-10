import { fetchVehicleTypes, fetchServiceTypes } from 'lib/data/booking'
import ServiceTypeSelection from './ServiceTypeSelection'
import TimeSelection from './TimeSelection'
import VehicleTypeSelection from './VehicleTypeSelection'
import { BookingSelectionProvider } from 'context/booking-context/BookingSelectionContext'

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
      <div>
        <h1>Booking Selection</h1>
        <VehicleTypeSelection />
        <ServiceTypeSelection />
        <TimeSelection />
      </div>
    </BookingSelectionProvider>
  )
}
