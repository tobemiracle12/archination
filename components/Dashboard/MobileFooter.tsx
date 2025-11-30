'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/src/authStore'
import { FaBars, FaBell, FaMoon, FaSignOutAlt, FaSun } from 'react-icons/fa'
import { useTheme } from '@/context/ThemeContext'
import { NavStore } from '@/src/appInfoStore'
const MobileFooter = () => {
  const { theme, toggleTheme } = useTheme()
  const { toggleDashboardNav } = NavStore()

  const router = useRouter()
  const logout = () => {
    useAuthStore.getState().logout()
    router.replace('/')
  }
  return (
    <aside className="w-full px-4 bg-[var(--cardBackground)] text-primaryTextColor py-2 flex sm:justify-between fixed bottom-0 left-0">
      <div className="flex items-center gap-3">
        <div className="sm:flex items-center hidden gap-3">
          <div onClick={toggleTheme} className="dashboardHeaderCircles">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </div>
          <Link
            href={`/dashboard/notifications`}
            className="dashboardHeaderCircles"
          >
            <FaBell />
          </Link>
          <div onClick={logout} className="dashboardHeaderCircles">
            <FaSignOutAlt />
          </div>
        </div>
        <div onClick={toggleDashboardNav} className="dashboardHeaderCircles">
          <FaBars />
        </div>
      </div>
    </aside>
  )
}

export default MobileFooter
