import Image from 'next/image'

import { Card, CardProps } from '@/components/Card/Card'
import { MedSpaCardItem } from './components/MedSpaItem'
import { cn } from '@/utils/cn'

interface MedSpaCard extends CardProps {}

export const MedSpaCard = ({ className, ...props }: MedSpaCard) => {
  return (
    <Card className={cn('p-4 w-full gap-6', className)} {...props}>
      <div className="flex flex-col items-center mx-auto">
        <Image
          className="mb-4"
          alt="Gold Spa Logo"
          src="/gold-spa-logo.png"
          width={80}
          height={80}
        />
        <h2 className="text-neutral-900 text-lg font-bold leading-snug tracking-tight">
          Gold Spa
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <MedSpaCardItem label="Address">
          <div>2525 Camino del Rio S</div>
          <div>Suite 315 Room 8</div>
          <div>San Diego, CA 92108</div>
        </MedSpaCardItem>
        <MedSpaCardItem label="Email">
          <a className="text-fuchsia-800" href="mailto:goldspa@gmail.com">
            goldspa@gmail.com
          </a>
        </MedSpaCardItem>
        <MedSpaCardItem label="Phone">
          <a className="text-fuchsia-800" href="tel:+11 123 4567 222">
            +11 123 4567 222
          </a>
        </MedSpaCardItem>
      </div>
    </Card>
  )
}
