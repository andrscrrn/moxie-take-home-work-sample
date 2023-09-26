import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Book with Moxie',
  description: 'Find us at 41 Flatbush Ave, Brooklyn, NY 11217',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={[inter.className, 'bg-gray'].join(' ')}>{children}</body>
    </html>
  )
}
