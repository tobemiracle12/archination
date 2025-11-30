'use client'
import BottomNavBar from '@/components/BottomNavBar'
import PublicNavbar from '@/components/Public/PublicNavbar'
import SideNavBar from '@/components/SideNavBar'
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
    <div className="text-[var(--tertiaryTextColor)] bg-[var(--secondaryBackground)] flex">
      <SideNavBar />
      <div className="flex-1 h-[100vh] overflow-auto md:px-3 lg:px-5">
        <PublicNavbar />
        <div className="py-10"> {children}</div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed cursor-pointer bottom-14 right-4 bg-[var(--customTextDarkColor)] hover:bg-[var(--customTextColor)] text-white w-10 h-10 rounded shadow-lg transition"
          aria-label="Scroll to Top"
        >
          ↑
        </button>

        <BottomNavBar />
      </div>
    </div>
  )
}
