'use client'

import React from 'react'
import { InferType } from 'yup'
import { useForm } from 'react-hook-form'
import { useSearchParams, useRouter } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from '@/components/Button/Button'
import { Card } from '@/components/Card/Card'
import { Checkbox } from '@/components/Checkbox/Checkbox'
import { Input } from '@/components/Input/Input'
import { SpaInformation } from '@/components/SpaInformation/SpaInformation'
import { TextArea } from '@/components/TextArea/TextArea'

import bookingSchema from '@/schemas/booking'
import { cn } from '@/utils/cn'

export default function Booking() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const step = searchParams.get('step')

  const isContactInformationStep = step === null
  const isPaymentInformationStep = step === 'payment'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
  })

  const onSubmit = (data: InferType<typeof bookingSchema>) => {
    console.log('onSubmitData:', data)
    router.replace(`/booking/confirmation`)
  }

  return (
    <form
      className={
        'mx-auto flex max-w-screen-xl flex-col items-start gap-7 lg:mt-16 lg:flex-row'
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <SpaInformation className={cn('w-full lg:w-2/5')} />
      <Card
        className={cn('hidden w-full gap-4 p-4 lg:w-3/5 lg:px-16 lg:py-12', {
          flex: isContactInformationStep,
        })}
      >
        <h2 className="text-lg font-bold leading-normal tracking-tight">
          Enter your details below
        </h2>
        <Input
          label="Full Name"
          placeholder="Input text"
          errorMessage={errors.fullName?.message}
          {...register('fullName')}
        />
        <Input
          label="Email"
          placeholder="Input text"
          errorMessage={errors.email?.message}
          {...register('email')}
        />
        <Input
          label="Phone"
          placeholder="Input text"
          errorMessage={errors.phone?.message}
          {...register('phone')}
        />
        <TextArea
          label="Visit reason"
          placeholder="Input text"
          errorMessage={errors.visitReason?.message}
          {...register('visitReason')}
        />
      </Card>
      <Card
        className={cn('hidden w-full gap-6 p-4 lg:w-3/5 lg:px-16 lg:py-12', {
          flex: isPaymentInformationStep,
        })}
      >
        <h2 className="text-lg font-bold leading-snug tracking-tight">
          Secure your appointment by card
        </h2>
        <p className="text-gray-600 text-sm font-normal leading-normal">
          A credit or debit card is required to book your appointment.
        </p>
        <div className="flex w-full flex-col gap-2">
          <Input
            label="Card information"
            placeholder="1234 1234 1234 1234"
            inputMode="numeric"
            errorMessage={errors.creditCardNumber?.message}
            {...register('creditCardNumber')}
          />
          <div className="flex gap-2">
            <Input
              placeholder="MM / YY"
              errorMessage={errors.creditCardExpiration?.message}
              {...register('creditCardExpiration')}
            />
            <Input
              placeholder="CVV"
              inputMode="numeric"
              errorMessage={errors.creditCardCVV?.message}
              {...register('creditCardCVV')}
            />
          </div>
        </div>
        <Input
          placeholder="Billing zip code"
          inputMode="numeric"
          errorMessage={errors.billingZipCode?.message}
          {...register('billingZipCode')}
        />
        <Checkbox
          label="We ask that you please reschedule or cancel at least 24 hours before the
        beginning of your appointment or you may be charged a cancellation fee
        of $50. In the event of emergency, contact us directly. Your card will
        held in case of late cancellation and for future purchases. It will not
        be charged now."
          errorMessage={errors.acceptTerms?.message}
          {...register('acceptTerms')}
        />
        <div className="inline-flex h-[1.50px] w-full flex-col items-start justify-start gap-2 bg-zinc-200">
          <div className="relative h-[1.50px] w-full" />
        </div>
        <Button
          className="w-full"
          label="Book appointment"
          size="large"
          type="submit"
        />
        <p className=" text-gray-600 text-sm font-normal leading-normal">
          By creating this appointment, you acknowledge you will receive
          automated transactional messages from this merchant.
        </p>
        {Object.entries(errors).length ? (
          <p className="text-xs text-red-500">
            Please ensure that all required information is correctly filled out
            in each step, including your personal details information.
          </p>
        ) : null}
      </Card>
    </form>
  )
}
