import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Distributed Logging System Design',
  description: 'Logging architecture for distributed microservices — debugging, performance, and security audit.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
