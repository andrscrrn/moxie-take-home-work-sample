import Link from 'next/link'
import { Button } from '@/components/Button/Button'

export default function Home() {
  return (
    <main className="flex justify-center items-center h-full">
      <Link href="/booking">
        <Button label="Book with Moxie" />
      </Link>
    </main>
  )
}
