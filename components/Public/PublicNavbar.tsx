'use client'
import { NavStore } from '@/src/appInfoStore'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
export default function PublicNavbar() {
  const pathName = usePathname()
  const { toggleVNav, clearNav } = NavStore()

  useEffect(() => {
    clearNav()
  }, [pathName])

  const closeNave = (e: React.MouseEvent) => {
    e.stopPropagation()
    clearNav()
  }

  return (
    <div className=" w-full flex justify-center left-0 sticky lg:top-3 top-0 z-40">
      <div className="flex px-3 bg-[var(--primaryBackground)] text-[var(--tertiaryTextColor)] w-full lg:max-w-[1200px] overflow-hidden py-3 lg:rounded-full border border-[var(--borderColor)]">
        <Link href={`/`} className="flex justify-center items-center mr-auto">
          <div className="flex justify-center py-[5px] items-center bg-[var(--customTextColor)] text-white rounded-full px-[20px]">
            <i className="bi bi-house-fill"></i>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <i className="bi bi-search text-[25px]"></i>
          <Link href={`/`} className="">
            <i className="bi bi-bell text-[25px]"></i>
          </Link>
          <i
            onClick={toggleVNav}
            className="bi bi-list text-[25px] cursor-pointer lg:hidden"
          ></i>
        </div>
        <div className="hidden bg-[var(--secondaryBackground)] rounded-full px-3 items-center cursor-pointer w-full max-w-[600px]">
          <input
            className="flex-1 text-[20px] outline-none border-none"
            type="text"
            placeholder="search properties"
          />
          <i className="bi bi-search text-[25px]"></i>
        </div>
      </div>
    </div>
  )
}
