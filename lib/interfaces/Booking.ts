export default interface Booking {
  id: number
  businessId: number
  userId: number
  vehicleTypeId: number
  serviceTypeId: number
  datetime: string
  estimatedMinutes: number
  cost: number
  discount: number
  deposit: number
  billNumber: number
  status: string
}
