import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WISE',
  description: 'WISE Main Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='overflow-x-hidden overflow-y-hidden'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Navigation />
        </body>
    </html>
  )
}