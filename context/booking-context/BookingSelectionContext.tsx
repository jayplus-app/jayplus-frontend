'use client'
import ServiceType from 'lib/interfaces/ServiceType'
import VehicleType from 'lib/interfaces/VehicleType'
import { createContext, useContext, useState } from 'react'

const BookingSelectionContext = createContext({
  vehicleTypes: [] as VehicleType[],
  serviceTypes: [] as ServiceType[],
  selectedVehicleTypeID: 0,
  selectedServiceTypeID: 0,
  setSelectedVehicleTypeID: (id: number) => {},
  setSelectedServiceTypeID: (id: number) => {},
})

export function BookingSelectionProvider({
  children,
  vehicleTypes,
  serviceTypes,
}: {
  children: React.ReactNode
  vehicleTypes: VehicleType[]
  serviceTypes: ServiceType[]
}) {
  const [selectedVehicleTypeID, setSelectedVehicleTypeID] = useState<number>(
    vehicleTypes[0].id
  )
  const [selectedServiceTypeID, setSelectedServiceTypeID] = useState<number>(
    serviceTypes[0].id
  )

  return (
    <BookingSelectionContext.Provider
      value={{
        vehicleTypes: vehicleTypes,
        serviceTypes: serviceTypes,
        selectedVehicleTypeID: selectedVehicleTypeID,
        selectedServiceTypeID: selectedServiceTypeID,
        setSelectedVehicleTypeID: setSelectedVehicleTypeID,
        setSelectedServiceTypeID: setSelectedServiceTypeID,
      }}
    >
      {children}
    </BookingSelectionContext.Provider>
  )
}

export function useBookingSelectionContext() {
  const bookingSelectionContext = useContext(BookingSelectionContext)
  if (!bookingSelectionContext) {
    throw new Error(
      'useBookingSelectionContext must be used within BookingSelectionProvider'
    )
  }
  return bookingSelectionContext
}
