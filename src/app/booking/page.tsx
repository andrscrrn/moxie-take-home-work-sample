'use client'

import { useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'
import { object, string, bool, InferType } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { SpaInformation } from '../../components/SpaInformation/SpaInformation'
import { Checkbox } from '@/components/Checkbox/Checkbox'
import { Card } from '@/components/Card/Card'
import { Input } from '@/components/Input/Input'
import { TextArea } from '@/components/TextArea/TextArea'
import { Button } from '@/components/Button/Button'

import { cn } from '@/utils/cn'

let schema = object({
  fullName: string().required('please enter your full name'),
  email: string().email('please enter a valid email address').required(),
  phone: string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'phone number is not valid',
    )
    .required(),
  visitReason: string().required(),
  creditCardNumber: string()
    .matches(
      /^(?:3[47]\d{13}|(?:4|5|6)\d{15})$/,
      'credit card number is not valid',
    )
    .required(),
  creditCardExpiration: string()
    .matches(/^(0[1-9]|1[0-2])\s*\/\s*\d{2}$/, 'expiration date is not valid')
    .required(),
  creditCardCVV: string()
    .matches(/^\d{3,4}$/, 'CVV is not valid')
    .required(),
  billingZipCode: string()
    .matches(/^\d{5}(?:[-\s]\d{4})?$/, 'zip code is not valid')
    .required(),
  acceptTerms: bool().oneOf([true], 'accept terms'),
}).required()

export default function Booking() {
  const searchParams = useSearchParams()
  const step = searchParams.get('step')

  const isContactInformationStep = step === null
  const isPaymentInformationStep = step === 'payment'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: InferType<typeof schema>) => console.log(data)

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
          label=" We ask that you please reschedule or cancel at least 24 hours before the
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
