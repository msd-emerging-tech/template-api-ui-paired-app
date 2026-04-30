import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API + UI Paired App',
  description: 'Full-stack prototype with API and UI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
