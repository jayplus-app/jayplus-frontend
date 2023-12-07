import { fetchVehicleTypes } from 'lib/data/fetchVehicleTypes'
import ServiceTypeSelection from './ServiceTypeSelection'
import TimeSelection from './TimeSelection/TimeSelection'
import VehicleTypeSelection from './VehicleTypeSelection'
import { BookingSelectionProvider } from 'lib/context/booking-context/BookingSelectionContext'
import { fetchServiceTypes } from 'lib/data/fetchServiceTypes'

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
