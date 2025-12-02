'use client'
import Link from 'next/link'

import Image from 'next/image'

import { BsCameraFill } from 'react-icons/bs'
import {
  AreaChartIcon,
  BathIcon,
  BedDoubleIcon,
  Heart,
  VideoIcon,
} from 'lucide-react'

import PropertyStore from '@/src/zustand/Property'
import { formatMoney } from '@/lib/helpers'
export default function Home() {
  const { properties } = PropertyStore()

  return (
    <div>
      {/* <div className="w-[300px] h-[350px] rounded-2xl overflow-hidden relative">
        <div className="top-3 right-0 px-3 z-20 absolute">
          <i className="bi bi-heart text-[25px] px-3"></i>
        </div>
        <Image
          src="/propertyImage5.jpg"
          sizes="100vw"
          className="h-full w-full object-cover"
          width={0}
          height={0}
          alt="real"
        />
        <div className="flex flex-col absolute bottom-4 left-0 z-20 px-3">
          <div className="text-[var(--primaryBackground)]">Kaylas's Haven</div>
          <div className="text-[var(--primaryBackground)]">
            New Heaven Road, Enugu
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-5"></div>
      </div> */}

      {/* <div className="flex flex-col bg-[var(--secondaryBackground)] w-[300px] py-[75px] px-[15px]">
        <div className="flex bg-[var(--primaryBackground)] rounded-full px-5 items-center cursor-pointer w-full max-w-[250px] py-1 mb-5">
          <i className="bi bi-envelope text-[12px] mr-3"></i>{' '}
          <input
            className="text-[14px] outline-none border-none"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="flex bg-[var(--primaryBackground)] rounded-full px-5 items-center cursor-pointer w-full max-w-[250px] py-1 mb-8">
          <i className="bi bi-lock text-[12px] mr-3"></i>{' '}
          <input
            className="text-[14px] outline-none border-none"
            type="text"
            placeholder="password"
          />
        </div>
        <Link
          href={`/`}
          className=" bg-green-900 rounded-full px-5 text-center cursor-pointer w-full max-w-[250px] py-1 text-[var(--primaryBackground)]"
        >
          Login
        </Link>
      </div> */}

      {/* ///////BLOG3 SECTION//////////// */}
      <div className="flex justify-center bg-[var(--secondaryBackground)] py-[75px]">
        <div className="customContainer">
          <div className="flex md:flex-col flex-col">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-5">
              {properties.map((item, index) => (
                <div key={index} className="flex overflow-hidden flex-col">
                  {item.pictures.length > 0 && (
                    <div className="rounded-[10px] relative overflow-hidden w-full">
                      <Image
                        src={String(item.pictures[0])}
                        sizes="100vw"
                        className="h-[250px] xl:h-[320px] w-full object-cover"
                        width={0}
                        height={0}
                        alt="real"
                      />
                      <div className="flex text-center z-20 items-center absolute right-3 top-4">
                        <div className="relative group inline-block">
                          <Heart className="w-4 h-5 cursor-pointer text-[var(--primaryBackground)]" />
                          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-green-900 text-white text-xs px-1 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Add to Favorites
                          </div>
                        </div>
                      </div>
                      <div className="flex absolute z-20 top-4 left-3">
                        <div className="propertyPill mr-4">
                          <BsCameraFill className="mr-3" size={15} />6
                        </div>
                        <div className="propertyPill mr-1">
                          <VideoIcon className="mr-3" size={18} />1
                        </div>
                      </div>
                      <div className="flex text-black mb-6 absolute left-3 bottom-0 z-20 ">
                        <div className="text-sm mr-7 text-[var(--primaryBackground)]">
                          <div className="font-bold mb-2">Bedrooms</div>
                          <div className="flex text-center justify-center">
                            {item.bedrooms}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                    </div>
                  )}
                  <div className="py-[10px] px-[12px] ">
                    <div className="text-[20px] text-black font-semibold hover:text-green-500 transition duration-300 mb-2">
                      {' '}
                      <Link href={`/dashboard/seller/${item._id}`} className="">
                        {item.name}
                      </Link>
                    </div>
                    <div className="flex mb-3">
                      <Link href={`/property-details/${item._id}`}>
                        {' '}
                        <i className="bi bi-geo-alt-fill mr-2 text-[15px] text-green-500 underline">
                          {' '}
                          {item.address}
                        </i>
                      </Link>
                    </div>

                    <div className="flex items-center justify-between ">
                      <div className="text-green-500 lg:text-[20px]">
                        ₦{formatMoney(item.price)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col w-full max-w-[400px] bg-[var(--borderColor)] overflow-hidden rounded-2xl">
        <div className="relative justify-center mb-3">
          <Image
            src="/RealEstateImage.png"
            sizes="100vw"
            className="h-[250px] w-full object-cover rounded-tr-2xl rounded-tl-2xl"
            width={0}
            height={0}
            alt="real"
          />

          <i className="bi bi-upload flex absolute top-6 right-4 z-20 text-3xl rounded-full w-[50px] h-[50px] bg-[var(--primaryBackground)] justify-center items-center shadow-lg transition hover:scale-110"></i>
        </div>
        <div className="px-4">
          <div className="text-[var(--secondaryTextColor)] font-bold">
            Aurora Retreat
          </div>
          <div className="flex mb-3">
            <Link href={`/ `}>
              {' '}
              <i className="bi bi-geo-alt-fill mr-2 text-[15px] text-blue-500 underline mb-2">
                {' '}
                Hatteras Lane, Hollywood, FL 33019, USA
              </i>
            </Link>
          </div>
          <div className="text-blue-500 mb-2 text-[20px] font-bold">
            ₦50,000,000.00
          </div>
          <div className="grid grid-cols-3 mb-4">
            <div className="flex">
              <BedDoubleIcon className="mr-2" />
              <div className="text mr-2">4</div>
              <div className="text">Beds</div>
            </div>
            <div className="flex">
              <BathIcon className="mr-2" />
              <div className="text mr-2">4</div>
              <div className="text">Baths</div>
            </div>
            <div className="flex">
              <AreaChartIcon className="mr-2" />
              <div className="text mr-2">4</div>
              <div className="text">Beds</div>
            </div>
          </div>
          <div className="grid grid-cols-3 mb-4 gap-2">
            <div className="">
              <Image
                src="/propertyImage3.jpg"
                sizes="100vw"
                className="h-[100px] w-full object-cover rounded-2xl"
                width={0}
                height={0}
                alt="real"
              />
            </div>
            <div className="">
              <Image
                src="/propertyImage4.jpg"
                sizes="100vw"
                className="h-[100px] w-full object-cover rounded-2xl"
                width={0}
                height={0}
                alt="real"
              />
            </div>
            <div className="">
              <Image
                src="/propertyImage5.jpg"
                sizes="100vw"
                className="h-full w-full object-cover rounded-2xl"
                width={120}
                height={100}
                alt="real"
              />
            </div>
          </div>
          <div className="flex flex-col py-[14px] px-[12px] rounded-2xl bg-[var(--primaryBackground)] mb-6">
            <div className="text-[20px] text-[var(--secondaryTextColor)] font-bold mb-4">
              Features
            </div>
            <div className="text-[17px] text-[var(--secondaryTextColor)] font-semibold mb-1">
              Spacious Interiors:
            </div>
            <div className="text-[13px] mb-1">
              Open floor plans with floor-to-ceiling windows that blend nature
              with your living space
            </div>
            <div className="text-[15px] text-[var(--secondaryTextColor)] mb-1 font-semibold">
              Eco-friendly Materials:
            </div>
            <div className="text-[13px]">
              Sustainable materials used throughout the retreat for a harmonous
              relationship with Nature
            </div>
          </div>
        </div>
        <div className="bg-[var(--primaryBackground)] px-[15px] rounded-br-2xl rounded-bl-2xl pb-6">
          <div className="rounded-full py-[15px] justify-center text-center bg-[var(--secondaryTextColor)] w-full">
            <div className="text-white ">Book Now</div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
