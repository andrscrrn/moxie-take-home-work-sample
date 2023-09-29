import { Card, CardProps } from '@/components/Card/Card'
import { Input } from '@/components/Input/Input'
import { TextArea } from '@/components/TextArea/TextArea'
import { cn } from '@/utils/cn'

interface BookingCardProps extends CardProps {}

export const BookingCard = ({ className, ...props }: BookingCardProps) => {
  return (
    <Card
      className={cn('w-full p-4 lg:px-16 lg:py-12 gap-4', className)}
      {...props}
    >
      <h2 className="text-lg font-bold leading-normal tracking-tight">
        Enter your details below
      </h2>
      <Input label="Full Name" placeholder="Input text" />
      <Input label="Email" placeholder="Input text" />
      <Input label="Phone" placeholder="Input text" />
      <TextArea label="Visit reason" placeholder="Input text" />
    </Card>
  )
}
