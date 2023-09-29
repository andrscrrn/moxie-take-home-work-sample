import { BottomBar } from '@/components/BottomBar/BottomBar'
import { Button } from '@/components/Button/Button'

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="px-4 lg:px-0 pb-28">
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
