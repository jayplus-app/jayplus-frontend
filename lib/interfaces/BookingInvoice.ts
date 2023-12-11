export default interface BookingInvoice {
  bookingID: number
  status: string
  vehicleType: string
  serviceType: string
  datetime: string
  serviceCost: number
  discount: number
  total: number
  deposit: number
  remaining: number
}
