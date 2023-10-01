import Link from 'next/link'
import { Button } from '@/components/Button/Button'

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <Link href="/booking">
        <Button label="Click to Book" />
      </Link>
    </main>
  )
}
