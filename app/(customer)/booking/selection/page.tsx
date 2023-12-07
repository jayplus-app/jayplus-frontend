import ServiceTypeSelection from './ServiceTypeSelection/ServiceTypeSelection'
import TimeSelection from './TimeSelection/TimeSelection'
import VehicleTypeSelection from './VehicleTypeSelection/VehicleTypeSelection'

export default function Page() {
  return (
    <div>
      <h1>Booking Selection</h1>
      <VehicleTypeSelection />
      <ServiceTypeSelection />
      <TimeSelection />
    </div>
  )
}
