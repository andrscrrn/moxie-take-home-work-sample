import Link from 'next/link'
import { Button } from '@/components/Button/Button'

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Link href="/booking">
        <Button label="Click to Book" />
      </Link>
    </main>
  )
}
