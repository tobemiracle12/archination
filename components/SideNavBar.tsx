'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'
import { FaBell, FaExchangeAlt, FaUser } from 'react-icons/fa'
import { usePathname, useRouter } from 'next/navigation'
import { FaGear } from 'react-icons/fa6'
import { useAuthStore } from '@/src/authStore'

export default function SideNavBar() {
  const { theme } = useTheme()
  const { user, logout } = useAuthStore()
  const pathname = usePathname()
  const router = useRouter()

  const LogOutUser = () => {
    logout()
    router.push('/')
  }

  return (
    <div className="md:flex w-[270px] py-3 px-3 h-[100vh] overflow-auto sticky top-0 hidden">
      <div className="h-full w-full bg-[var(--primaryBackground)] rounded-2xl flex flex-col">
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
            <NavItem label="Profile" link="profile" icon={<FaUser />} />
            <NavItem label="Transactions" icon={<FaExchangeAlt />} />
            <NavItem label="Notifications" icon={<FaBell />} />

            <div className="text-xs text-gray-400 mt-4">ACCOUNT</div>
            <NavItem label="Verification" />
            <NavItem label="Designer" />
            <NavItem label="Agent" />
            <NavItem label="Seller" link="/seller" pathname={pathname} />

            <div className="text-xs text-gray-400 mt-4">TOOLS</div>
            <NavItem label="Settings" icon={<FaGear />} />
          </nav>

          <div className="mt-4 px-4">
            {user ? (
              <button
                onClick={LogOutUser}
                className="w-full cursor-pointer bg-[var(--customTextColor)] text-[var(--primaryBackground)] font-semibold py-2 flex items-center justify-center gap-2 rounded-full"
              >
                <i className="bi bi-box-arrow-left text-[20px] mr-5"></i> Log
                Out
              </button>
            ) : (
              <Link
                href={'/sign-in'}
                className="w-full cursor-pointer bg-[var(--customTextColor)] text-[var(--primaryBackground)] font-semibold py-2 flex items-center justify-center gap-2 rounded-full"
              >
                <i className="bi bi-box-arrow-right text-[20px] mr-5"></i> Log
                In
              </Link>
            )}
          </div>
        </div>

        <div className="mt-auto px-4 py-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
              JS
            </div>
            <div>
              <p className="">Jane Smith</p>
              <p className="text-gray-400 text-xs">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const NavItem = ({
  label,
  link,
  icon,
  pathname,
}: {
  label: string
  link?: string
  pathname?: string
  icon?: React.ReactNode
}) => (
  <Link
    href={`/dashboard/${link}`}
    className={`${
      pathname === `/dashboard${link}`
        ? 'bg-[var(--customTextColor)] text-white'
        : ''
    } flex items-center gap-2 py-2 px-3 hover:bg-[var(--customTextColor)] hover:text-white rounded-full cursor-pointer`}
  >
    {icon && icon}
    <span>{label}</span>
  </Link>
)
