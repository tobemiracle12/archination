'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FaUsers, FaGamepad, FaPlus } from 'react-icons/fa'

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-[#1c1c1e] text-white h-screen flex flex-col justify-between">
      <div>
        <div className="p-5">
          <Link href="/" className="sm:w-40 w-32 max-w-40">
            <Image
              style={{ height: 'auto', width: 150 }}
              src="/images/logos/WhiteArchinationLogo.png"
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
          <NavItem label="Dashboard" />
          <NavItem label="Users" icon={<FaUsers />} />
          <NavItem label="Activity log" />

          <div className="text-xs text-gray-400 mt-4">GAMES</div>
          <NavItem label="Cases" />
          <NavItem label="Characters" />
          <NavItem label="Objects" />
          <NavItem label="Locations" />
          <NavItem label="Places" />

          <div className="text-xs text-gray-400 mt-4">TOOLS</div>
          <NavItem label="Edit with AI" />
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
    </aside>
  )
}

const NavItem = ({
  label,
  icon,
}: {
  label: string
  icon?: React.ReactNode
}) => (
  <div className="flex items-center gap-2 py-2 px-3 hover:bg-gray-700 rounded cursor-pointer">
    {icon && icon}
    <span>{label}</span>
  </div>
)

export default AdminSidebar
