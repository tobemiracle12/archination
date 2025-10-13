'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/src/authStore'
import { FaBars, FaBell, FaMoon, FaSignOutAlt, FaSun } from 'react-icons/fa'
import { useTheme } from '@/context/ThemeContext'
import { NavStore } from '@/src/appInfoStore'
const DashboardHeader = () => {
  const { user } = useAuthStore()
  const { theme, toggleTheme } = useTheme()
  const { dashboardNav, toggleDashboardNav } = NavStore()

  const router = useRouter()
  const logout = () => {
    useAuthStore.getState().logout()
    router.replace('/')
  }
  return (
    <aside className="w-full px-4 bg-[var(--widgetBackground)] text-primaryTextColor py-2 flex sm:justify-between">
      <Link href="/dashboard" className="sm:hidden mr-auto block">
        <Image
          style={{ height: 'auto', width: 40 }}
          src={
            user && user.picture
              ? String(user.picture)
              : '/images/logos/ArchinationIcon.png'
          }
          loading="lazy"
          sizes="100vw"
          className=""
          width={0}
          height={0}
          alt="Archination User"
        />
      </Link>
      <Link href="/dashboard/profile" className="mr-3 sm:mr-0">
        <Image
          style={{ height: 40, width: 40 }}
          src={
            user && user.picture ? String(user.picture) : '/images/avatar.jpg'
          }
          loading="lazy"
          sizes="100vw"
          className="rounded-full"
          width={0}
          height={0}
          alt="Archination User"
        />
      </Link>
      <div className="flex items-center">
        <div className="sm:flex items-center hidden">
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

export default DashboardHeader
