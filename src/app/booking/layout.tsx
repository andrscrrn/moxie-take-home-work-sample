import Link from 'next/link'

import { BottomBar } from '@/components/BottomBar/BottomBar'
import { Button } from '@/components/Button/Button'

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="px-4 pb-28">
      <h1 className="my-3 text-center text-lg font-bold tracking-tight lg:hidden">
        Book appointment
      </h1>
      {children}
      <BottomBar className="fixed bottom-0 left-0">
        <Link href="/booking?step=credit-card">
          <Button className="w-full lg:w-auto" label="Continue" size="large" />
        </Link>
      </BottomBar>
    </div>
  )
}
