import { BottomBar } from '@/components/BottomBar/BottomBar'
import { Button } from '@/components/Button/Button'

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="px-4 pb-28">
      <h1 className="text-center text-lg font-bold tracking-tight my-3 lg:hidden">
        Book appointment
      </h1>
      {children}
      <BottomBar>
        <Button className="w-full lg:w-auto" label="Continue" size="large" />
      </BottomBar>
    </div>
  )
}
