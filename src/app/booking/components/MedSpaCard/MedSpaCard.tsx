import Image from 'next/image'

import { Card, CardProps } from '@/components/Card/Card'
import { MedSpaCardItem } from './components/MedSpaItem'
import { cn } from '@/utils/cn'

interface MedSpaCard extends CardProps {}

export const MedSpaCard = ({ className, ...props }: MedSpaCard) => {
  return (
    <Card className={cn('w-full gap-6 p-4', className)} {...props}>
      <div className="mx-auto flex flex-col items-center">
        <Image
          className="mb-4"
          alt="Gold Spa Logo"
          src="/gold-spa-logo.png"
          width={80}
          height={80}
          priority
        />
        <h2 className="text-lg font-bold leading-snug tracking-tight">
          Gold Spa
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <MedSpaCardItem label="Address">
          <p>2525 Camino del Rio S</p>
          <p>Suite 315 Room 8</p>
          <p>San Diego, CA 92108</p>
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
