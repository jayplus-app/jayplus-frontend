export default interface BookingTimeslot {
  id: string
  startTime: string
  endTime: string
  freeMinutes: number
  available: boolean
  isPast: boolean
}
