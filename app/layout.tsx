import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import LayoutProvider from '@/components/Public/LayoutProvider'
import { ThemeProvider } from '../context/ThemeContext'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Archination',
  description: 'Maintaining Universal Design of Homes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutProvider />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
