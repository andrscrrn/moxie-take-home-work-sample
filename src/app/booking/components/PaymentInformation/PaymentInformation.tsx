import { Button } from '@/components/Button/Button'
import { Card, CardProps } from '@/components/Card/Card'
import { Checkbox } from '@/components/Checkbox/Checkbox'
import { Input } from '@/components/Input/Input'
import { cn } from '@/utils/cn'

interface PaymentInformationProps extends CardProps {}

export const PaymentInformation = ({
  className,
  ...props
}: PaymentInformationProps) => {
  return (
    <Card
      className={cn('w-full gap-6 p-4 lg:px-16 lg:py-12', className)}
      {...props}
    >
      <h2 className="text-lg font-bold leading-snug tracking-tight">
        Secure your appointment by card
      </h2>
      <p className="text-gray-600 text-sm font-normal leading-normal">
        A credit or debit card is required to book your appointment.
      </p>
      <div className="flex w-full flex-col gap-2">
        <Input label="Card information" placeholder="1234 1234 1234 1234" />
        <div className="flex gap-2">
          <Input placeholder="MM / YY" />
          <Input placeholder="CVV" />
        </div>
      </div>
      <Input placeholder="Billing zip code" />
      <Checkbox
        label=" We ask that you please reschedule or cancel at least 24 hours before the
        beginning of your appointment or you may be charged a cancellation fee
        of $50. In the event of emergency, contact us directly. Your card will
        held in case of late cancellation and for future purchases. It will not
        be charged now."
      />
      <div className="inline-flex h-[1.50px] w-full flex-col items-start justify-start gap-2 bg-zinc-200">
        <div className="relative h-[1.50px] w-full" />
      </div>
      <Button className="w-full" label="Book appointment" size="large" />
      <p className=" text-gray-600 text-sm font-normal leading-normal">
        By creating this appointment, you acknowledge you will receive automated
        transactional messages from this merchant.
      </p>
    </Card>
  )
}
