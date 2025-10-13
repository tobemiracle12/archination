'use client'
import PublicFooter from '@/components/Public/PublicFooter'
import PublicHeader from '@/components/Public/PublicHeader'
import PublicNavbar from '@/components/Public/PublicNavbar'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="text-[var(--primary-text-color)]">
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
