'use client'
import Link from 'next/link'
import Image from 'next/image'
// import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/solid'

export default function PublicFooter() {
  return (
    <div className="bg-[var(--customTextColor)] py-[70px] flex justify-center">
      <div className="customContainer">
        <div className="flex mb-[50px]">
          <Link href="/" className="sm:w-40 w-32 max-w-40">
            <Image
              style={{ height: 'auto' }}
              src="/images/logos/ArchiDarkLogo.png"
              loading="lazy"
              sizes="100vw"
              className="sm:w-40 w-32"
              width={0}
              height={0}
              alt="Archination Logo"
            />
          </Link>
        </div>
        <div className="grid grid-cols-3 text-white">
          <div className="t">
            <div className="font-bold text-lg mb-5">Quick Links</div>
            <div className="grid grid-cols-2">
              <ul className="m-0 p-0">
                <li className="mb-3">
                  <Link href={'/'} className="flex">
                    <i className="bi bi-caret-right-fill mr-1"></i> Home
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href={'/'} className="flex">
                    <i className="bi bi-caret-right-fill mr-1"></i> Property
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href={'/'} className="flex">
                    <i className="bi bi-caret-right-fill mr-1"></i> Gallery
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href={'/'} className="flex">
                    <i className="bi bi-caret-right-fill mr-1"></i> Contacts
                  </Link>
                </li>
              </ul>
              <ul className="m-0 p-0">
                <li className="mb-3">
                  <Link href={'/'} className="flex">
                    <i className="bi bi-caret-right-fill mr-1"></i> Real Estate
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href={'/'} className="flex">
                    <i className="bi bi-caret-right-fill mr-1"></i> Blog
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href={'/'} className="flex">
                    <i className="bi bi-caret-right-fill mr-1"></i> Pages
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="t">
            <div className="font-bold text-lg mb-5">Contacts</div>
            <ul className="m-0 p-0">
              <li className="mb-3 flex">
                <i className="bi bi-geo-alt-fill mr-3"></i> 3015 Grand Ave,
                Coconut Grove, Merrick Way, FL 12345
              </li>
              <li className="mb-3 flex">
                <i className="bi bi-telephone-fill mr-3"></i> 23-456-7890
              </li>
              <li className="mb-3 flex">
                <i className="bi bi-envelope-fill mr-3"></i>{' '}
                support@archination.io
              </li>
            </ul>
          </div>
          <div className="t">
            <div className="font-bold text-lg mb-5">Tags</div>
            <ul className="m-0 p-0 flex flex-wrap">
              <li className="footerPill">awareness</li>
              <li className="footerPill">awareness</li>
              <li className="footerPill">awareness</li>
              <li className="footerPill">awareness</li>
              <li className="footerPill">awareness</li>
              <li className="footerPill">awareness</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
