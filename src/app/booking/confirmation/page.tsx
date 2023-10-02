'use client'

import Image from 'next/image'

import { Card, CardProps } from '@/components/Card/Card'
import { SpaInformation } from '../../../components/SpaInformation/SpaInformation'

export default function Booking() {
  return (
    <div className="mx-auto flex max-w-[542px] items-start gap-7 lg:mt-16 lg:flex-col">
      <Card className="flex w-full items-center gap-6 p-4 lg:w-full lg:px-16 lg:py-12">
        <Image
          className="mb-4"
          alt="Success Icon"
          src="/success-icon.png"
          width={200}
          height={200}
          priority
        />
        <div className="text-gray-600 text-center text-lg font-bold leading-snug tracking-tight">
          Your appointment has been booked!
        </div>
        <div className="text-center text-base font-normal leading-normal text-neutral-900">
          A confirmation has been sent to your email address.
        </div>
      </Card>
      <SpaInformation className="w-full lg:w-full" />
    </div>
  )
}
