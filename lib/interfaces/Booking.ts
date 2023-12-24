export default interface Booking {
  id: number
  businessId: number
  userId: number
  vehicleType: string
  serviceType: string
  datetime: string
  estimatedMinutes: number
  cost: number
  discount: number
  deposit: number
  billNumber: number
  status: string
}
