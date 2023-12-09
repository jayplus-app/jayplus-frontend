import {
  fetchVehicleTypes,
  fetchServiceTypes,
  fetchBookingTimeslots,
} from 'lib/data/booking'
import ServiceTypeSelection from './ServiceTypeSelection'
import TimeSelection from './TimeSelection/TimeSelection'
import VehicleTypeSelection from './VehicleTypeSelection'
import { BookingSelectionProvider } from 'context/booking-context/BookingSelectionContext'
import { addDaysToDate, todaysDate } from 'lib/utils/date'

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    serviceTypeID?: string
    vehicleTypeID?: string
    datetime?: string
    numCols?: string
    startDate?: string
  }
}) {
  const vehicleTypes = await fetchVehicleTypes()
  const serviceTypes = await fetchServiceTypes()

  if (vehicleTypes.length === undefined || vehicleTypes.length === 0) {
    return <div>No vehicle types found</div>
  }

  if (serviceTypes.length === undefined || serviceTypes.length === 0) {
    return <div>No service types found</div>
  }

  const selectedServiceTypeID =
    Number(searchParams?.serviceTypeID) || serviceTypes[0].id

  const selectedVehicleTypeID =
    Number(searchParams?.vehicleTypeID) || vehicleTypes[0].id

  const selectedDatetime = searchParams?.datetime || ''

  const numCols = Number(searchParams?.numCols) || 3

  const startDate = searchParams?.startDate || todaysDate()

  const dates = Array.from({ length: numCols }, (_, i) =>
    addDaysToDate(startDate, i)
  )

  const timeslotPromises = dates.map(date =>
    fetchBookingTimeslots(date, selectedVehicleTypeID, selectedServiceTypeID)
  )

  const timeslotArrays = await Promise.all(timeslotPromises)

  const bookingTimeslots = Object.fromEntries(
    dates.map((date, i) => [date, timeslotArrays[i]])
  )

  return (
    <BookingSelectionProvider
      vehicleTypes={vehicleTypes}
      serviceTypes={serviceTypes}
    >
      <div>
        <h1>Booking Selection</h1>
        <VehicleTypeSelection
          vehicleTypes={vehicleTypes}
          selectedVehicleTypeID={selectedVehicleTypeID}
        />
        <ServiceTypeSelection
          serviceTypes={serviceTypes}
          selectedServiceTypeID={selectedServiceTypeID}
        />
        <TimeSelection
          bookingTimeslots={bookingTimeslots}
          selectedDatetime={selectedDatetime}
        />
      </div>
    </BookingSelectionProvider>
  )
}
