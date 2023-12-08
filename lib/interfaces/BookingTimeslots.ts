export default interface BookingTimeslot {
  id: string
  startTime: Date
  endTime: Date
  freeMinutes: number
  available: boolean
  isPast: boolean
}
