'use client'

import { useSearchParams } from 'next/navigation'

import { Confirmation } from './components/Confirmation/Confirmation'
import { ContactInformation } from './components/ContactInformation/ContactInformation'
import { PaymentInformation } from './components/PaymentInformation/PaymentInformation'
import { SpaInformation } from './components/SpaInformation/SpaInformation'

import { cn } from '@/utils/cn'

export default function Booking() {
  const searchParams = useSearchParams()
  const step = searchParams.get('step')

  const isContactInformationStep = step === null
  const isPaymentInformationStep = step === 'payment'
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
      <SpaInformation
        className={cn('w-full lg:w-2/5', {
          'lg:w-full': isConfirmationStep,
        })}
      />
      <ContactInformation
        className={cn('hidden w-full lg:w-3/5', {
          flex: isContactInformationStep,
        })}
      />
      <PaymentInformation
        className={cn('hidden w-full lg:w-3/5', {
          flex: isPaymentInformationStep,
        })}
      />
      <Confirmation
        className={cn('hidden w-full lg:w-3/5', {
          flex: isConfirmationStep,
          'lg:w-full': isConfirmationStep,
        })}
      />
    </div>
  )
}
