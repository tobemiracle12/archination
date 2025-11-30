'use client'
import { NavStore } from '@/src/appInfoStore'
import Link from 'next/link'
import Image from 'next/image'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
export default function PublicNavbar() {
  const pathName = usePathname()
  const { vNav, clearNav } = NavStore()

  useEffect(() => {
    clearNav()
  }, [pathName])

  const closeNave = (e: React.MouseEvent) => {
    e.stopPropagation()
    clearNav()
  }

  return (
    <div className=" w-full flex justify-center left-0 sticky top-3 z-50">
      <div className="flex px-3 bg-[var(--primaryBackground)] rounded-full text-[var(--tertiaryTextColor)] w-full max-w-[1200px] overflow-hidden py-3">
        <Link href={`/`} className="flex justify-center items-center mr-auto">
          <div className="flex justify-center py-[5px] items-center bg-[var(--customTextColor)] text-white rounded-full px-[20px]">
            <i className="bi bi-house-fill mr-4 text-[25px]"></i>
            <div className="text-[20px]">Home</div>
          </div>
        </Link>
        <div className="flex bg-[var(--secondaryBackground)] rounded-full px-3 items-center cursor-pointer w-full max-w-[600px]">
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
