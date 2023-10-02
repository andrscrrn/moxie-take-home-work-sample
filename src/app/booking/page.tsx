'use client'

import { useSearchParams } from 'next/navigation'

import { BookingCard } from './components/BookingCard/BookingCard'
import { MedSpaCard } from './components/MedSpaCard/MedSpaCard'
import { CreditCardInfo } from './components/CreditCardInfo/CreditCardInfo'

export default function Booking() {
  const searchParams = useSearchParams()
  const step = searchParams.get('step')
  const showCreditCard = step === 'credit-card'

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-start gap-7 lg:mt-16 lg:flex-row">
      <MedSpaCard className="w-full lg:w-2/5" />
      {showCreditCard ? (
        <CreditCardInfo className="w-full lg:w-3/5" />
      ) : (
        <BookingCard className="w-full lg:w-3/5" />
      )}
    </div>
  )
}
