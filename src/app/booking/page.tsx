import { CardsContainer } from '@/components/CardsContainer/CardsContainer'
import { BottomBar } from '@/components/BottomBar/BottomBar'
import { Button } from '@/components/Button/Button'
import { Card } from '@/components/Card/Card'

export default function Booking() {
  return (
    <>
      <CardsContainer>
        <Card className="w-2/5">Gold Spa</Card>
        <Card className="w-3/5">Enter your details below</Card>
      </CardsContainer>
      <BottomBar>
        <Button label="Continue" primary size="large" />
      </BottomBar>
    </>
  )
}
