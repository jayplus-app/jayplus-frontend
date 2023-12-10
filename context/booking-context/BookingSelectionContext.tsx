'use client'

import { useState, createContext, useContext } from 'react'
import ServiceType from 'lib/interfaces/ServiceType'
import VehicleType from 'lib/interfaces/VehicleType'

interface BookingSelectionContextProps {
  vehicleTypes: VehicleType[]
  serviceTypes: ServiceType[]
  selectedVehicleTypeID: number
  selectedServiceTypeID: number
  selectedDatetime: string
  setSelectedVehicleTypeID: (id: number) => void
  setSelectedServiceTypeID: (id: number) => void
  setSelectedDatetime: (datetime: string) => void
}

const BookingSelectionContext = createContext<BookingSelectionContextProps>({
  vehicleTypes: [],
  serviceTypes: [],
  selectedVehicleTypeID: 0,
  selectedServiceTypeID: 0,
  selectedDatetime: '',
  setSelectedVehicleTypeID: () => {},
  setSelectedServiceTypeID: () => {},
  setSelectedDatetime: () => {},
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
    vehicleTypes[0]?.id || 0
  )
  const [selectedServiceTypeID, setSelectedServiceTypeID] = useState<number>(
    serviceTypes[0]?.id || 0
  )
  const [selectedDatetime, setSelectedDatetime] = useState<string>('')

  return (
    <BookingSelectionContext.Provider
      value={{
        vehicleTypes,
        serviceTypes,
        selectedVehicleTypeID,
        selectedServiceTypeID,
        selectedDatetime,
        setSelectedVehicleTypeID,
        setSelectedServiceTypeID,
        setSelectedDatetime,
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
