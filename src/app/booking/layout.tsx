import { BottomBar } from '@/components/BottomBar/BottomBar'
import { Button } from '@/components/Button/Button'

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="px-4 lg:px-0 pb-28">
      <h1 className="text-center text-neutral-900 text-lg font-bold leading-normal tracking-tight my-3 lg:my-0 lg:hidden">
        Book appointment
      </h1>
      {children}
      <BottomBar>
        <Button
          className="w-full lg:w-auto"
          label="Continue"
          primary
          size="large"
        />
      </BottomBar>
    </div>
  )
}
