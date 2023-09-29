import { BookingCard } from '@/components/BookingCard/BookingCard'
import { MedSpaCard } from '@/components/MedSpaCard/MedSpaCard'

export default function Booking() {
  return (
    <div className="flex max-w-[1200px] gap-7 mx-auto lg:mt-16 items-start flex-col lg:flex-row">
      <MedSpaCard className="w-full lg:w-2/5" />
      <BookingCard className="w-full lg:w-3/5" />
    </div>
  )
}
