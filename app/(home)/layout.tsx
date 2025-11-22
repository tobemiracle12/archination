'use client'
import PublicFooter from '@/components/Public/PublicFooter'
import PublicHeader from '@/components/Public/PublicHeader'
import PublicNavbar from '@/components/Public/PublicNavbar'
import { MessageStore } from '@/src/zustand/Message'
import PropertyStore from '@/src/zustand/Property'
import { useEffect } from 'react'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { getProperties } = PropertyStore()
  const { setMessage } = MessageStore()
  useEffect(() => {
    getProperties('/properties', setMessage)
  }, [])
  return (
    <div className="text-[var(--TertiaryTextColor)]">
      <PublicHeader />
      <PublicNavbar />
      {children}

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed cursor-pointer bottom-4 right-4 bg-[var(--customTextDarkColor)] hover:bg-[var(--customTextColor)] text-white w-10 h-10 rounded shadow-lg transition"
        aria-label="Scroll to Top"
      >
        ↑
      </button>
      <PublicFooter />
    </div>
  )
}
