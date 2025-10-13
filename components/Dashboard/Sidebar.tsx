'use client'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaPlus,
  FaUser,
  FaBell,
  FaBoxOpen,
  FaExchangeAlt,
} from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { useTheme } from '@/context/ThemeContext'
import { NavStore } from '@/src/appInfoStore'

const DashboardSidebar = () => {
  const { theme } = useTheme()
  const { dashboardNav, clearDashboardNav } = NavStore()

  const closeNave = (e: React.MouseEvent) => {
    e.stopPropagation()
    clearDashboardNav()
  }

  return (
    <aside
      onClick={closeNave}
      className={`${
        dashboardNav ? 'left-0' : 'left-[-1000px] lg:left-0'
      } duration-300 fixed top-0 lg:flex w-full z-30 lg:w-auto lg:relative bg-black/50 h-screen`}
    >
      <div
        className={`w-64 bg-[var(--widgetBackground)] h-full flex flex-col justify-between`}
      >
        <div>
          <div className="px-5 pt-3">
            <Link href="/" className="sm:w-40 w-32 max-w-40">
              <Image
                style={{ height: 'auto', width: 150 }}
                src={
                  theme === `light`
                    ? '/images/logos/ArchinationLogo.png'
                    : '/images/logos/WhiteArchinationLogo.png'
                }
                loading="lazy"
                sizes="100vw"
                className="sm:w-40 w-32"
                width={0}
                height={0}
                alt="Archination Logo"
              />
            </Link>
          </div>

          <nav className="space-y-1 px-4">
            <div className="text-xs text-gray-400 mt-4">PLATFORM</div>
            <NavItem label="Dashboard" link="" />
            <NavItem label="Profile" link="profile" icon={<FaUser />} />
            <NavItem label="Products" icon={<FaBoxOpen />} />
            <NavItem label="Transactions" icon={<FaExchangeAlt />} />
            <NavItem label="Notifications" icon={<FaBell />} />

            <div className="text-xs text-gray-400 mt-4">ACCOUNT</div>
            <NavItem label="Verification" />
            <NavItem label="Designer" />
            <NavItem label="Agent" />
            <NavItem label="Seller" />

            <div className="text-xs text-gray-400 mt-4">TOOLS</div>
            <NavItem label="Settings" icon={<FaGear />} />
          </nav>

          <div className="mt-4 px-4">
            <button className="w-full cursor-pointer bg-[var(--customTextColor)] text-black font-semibold py-2 flex items-center justify-center gap-2 rounded">
              <FaPlus /> Add new case
            </button>
          </div>
        </div>

        <div className="bg-[#111111] px-4 py-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
              JS
            </div>
            <div>
              <p className="text-white">Jane Smith</p>
              <p className="text-gray-400 text-xs">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

const NavItem = ({
  label,
  link,
  icon,
}: {
  label: string
  link?: string
  icon?: React.ReactNode
}) => (
  <Link
    href={`/dashboard/${link}`}
    className="flex items-center gap-2 py-2 px-3 hover:bg-[var(--customTextColor)] hover:text-white rounded cursor-pointer"
  >
    {icon && icon}
    <span>{label}</span>
  </Link>
)

export default DashboardSidebar
