import { BookingCard } from './components/BookingCard/BookingCard'
import { MedSpaCard } from './components/MedSpaCard/MedSpaCard'

export default function Booking() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-start gap-7 lg:mt-16 lg:flex-row">
      <MedSpaCard className="w-full lg:w-2/5" />
      <BookingCard className="w-full lg:w-3/5" />
    </div>
  )
}
