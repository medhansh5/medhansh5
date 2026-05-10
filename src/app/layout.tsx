import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Medhansh Kabadwal',
  description: 'Visionary Engineering - Engineering Intelligent Safety Systems for the Developing World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className="bg-surface font-body-md text-on-surface topo-bg overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
