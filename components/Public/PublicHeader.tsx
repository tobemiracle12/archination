'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'
import { NavStore } from '@/src/appInfoStore'

export default function PublicHeader() {
  const { toggleVNav } = NavStore()
  return (
    <header className="bg-white text-[var(--primary-text-color)] py-2 flex justify-center">
      <div className="custom-container">
        <div className="flex justify-between w-full items-center">
          <Link href="/" className="sm:w-40 w-32 max-w-40">
            <Image
              style={{ height: 'auto' }}
              src="/images/logos/ArchinationLogo.png"
              loading="lazy"
              sizes="100vw"
              className="sm:w-40 w-32"
              width={0}
              height={0}
              alt="Archination Logo"
            />
          </Link>

          <div className="md:flex text-sm hidden">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[var(--custom-text-color)] text-base lg:text-xl" />
              <div>
                <p className="font-semibold text-[var(--secondary-text-color)] text-base">
                  3015 Grand Ave, Grove
                </p>
                <p>Merrick, FL 12345</p>
              </div>
            </div>

            <div className="flex items-start ml-2 lg:ml-5 gap-2">
              <FaPhoneAlt className="text-[var(--custom-text-color)] text-base lg:text-xl" />
              <div>
                <p className="font-semibold text-[var(--secondary-text-color)] text-base">
                  1-800-555-1234
                </p>
                <p>24/7 Customer Support</p>
              </div>
            </div>

            <div className="flex items-start ml-2 lg:ml-5 gap-2">
              <FaClock className="text-[var(--custom-text-color)] text-base lg:text-xl" />
              <div>
                <p className="font-semibold text-[var(--secondary-text-color)] text-base">
                  Mon – Fri: 9:00 – 17:30
                </p>
                <p>Online store always open</p>
              </div>
            </div>
          </div>

          <i
            onClick={toggleVNav}
            className="bi bi-list font-bold md:hidden text-3xl text-[var(--custom-text-color)] cursor-pointer"
          ></i>
        </div>
      </div>
    </header>
  )
}
