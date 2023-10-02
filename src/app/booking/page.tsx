'use client'

import { useSearchParams } from 'next/navigation'

import { BookingCard } from './components/BookingCard/BookingCard'
import { MedSpaCard } from './components/MedSpaCard/MedSpaCard'
import { CreditCardInfo } from './components/CreditCardInfo/CreditCardInfo'
import { ConfirmationCard } from './components/ConfirmationCard/ConfirmationCard'

import { cn } from '@/utils/cn'

export default function Booking() {
  const searchParams = useSearchParams()
  const step = searchParams.get('step')
  const isInitialState = step === null
  const isCreditCardStep = step === 'credit-card'
  const isConfirmationStep = step === 'confirmation'

  return (
    <div
      className={cn(
        'mx-auto flex max-w-screen-xl flex-col items-start gap-7 lg:mt-16 lg:flex-row',
        {
          'lg:flex-col-reverse': isConfirmationStep,
          'max-w-[542px]': isConfirmationStep,
        },
      )}
    >
      <MedSpaCard
        className={cn('w-full lg:w-2/5', {
          'lg:w-full': isConfirmationStep,
        })}
      />
      <BookingCard
        className={cn('hidden w-full lg:w-3/5', {
          flex: isInitialState,
        })}
      />
      <CreditCardInfo
        className={cn('hidden w-full lg:w-3/5', {
          flex: isCreditCardStep,
        })}
      />
      <ConfirmationCard
        className={cn('hidden w-full lg:w-3/5', {
          flex: isConfirmationStep,
          'lg:w-full': isConfirmationStep,
        })}
      />
    </div>
  )
}
