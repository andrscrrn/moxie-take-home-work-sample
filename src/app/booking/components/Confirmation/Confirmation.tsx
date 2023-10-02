import Image from 'next/image'

import { Card, CardProps } from '@/components/Card/Card'
import { cn } from '@/utils/cn'

interface ConfirmationProps extends CardProps {}

export const Confirmation = ({ className, ...props }: ConfirmationProps) => {
  return (
    <Card
      className={cn(
        'flex w-full items-center gap-6 p-4 lg:px-16 lg:py-12',
        className,
      )}
      {...props}
    >
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
  )
}
