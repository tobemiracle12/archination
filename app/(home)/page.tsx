'use client'
import Link from 'next/link'
import Hero from '@/components/Public/Hero'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsCameraFill } from 'react-icons/bs'
import { BedDouble, Heart, LandPlot, ShowerHead, VideoIcon } from 'lucide-react'
import FeatureHomes from '@/components/Public/FeatureHomes'
import PropertyStore from '@/src/zustand/Property'
import { formatMoney } from '@/lib/helpers'
export default function Home() {
  const { properties } = PropertyStore()

  return (
    <div>
      <Hero />

      {/* ///////BLOG3 SECTION//////////// */}
      <div className="flex justify-center bg-[var(--secondaryBackground)] py-[75px]">
        <div className="customContainer">
          <div className="flex md:flex-col flex-col">
            <div className="flex flex-col md:text-center text-center mb-10">
              <div className="md:text-[30px] text-[25px] text-black font-bold leading-4">
                Recent Properties
              </div>
              <hr className="border-t-2 border-b-green-300 w-[100px] mx-auto mt-3 mb-[30px]" />
              <div className="text-[var(--primaryTextColor)] ">
                Check out some of our latest properties.
              </div>
            </div>
            <div className="grid md:grid-cols-3 md:0 gap-10">
              {properties.map((item, index) => (
                <div
                  key={index}
                  className="flex overflow-hidden bg-white flex-col rounded-[6px]"
                >
                  <div className="flex relative w-full">
                    <div className="flex w-full absolute z-10 bottom-0 left-0 p-3">
                      <Image
                        src={'/blog3Image1.jpg'}
                        sizes="100vw"
                        className="h-[50px] mr-2 z-10 object-cover rounded-full w-[50px]"
                        width={0}
                        height={0}
                        alt="real"
                      />
                      <div
                        style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}
                        className="flex z-10 flex-col"
                      >
                        <div className="text-white">Melissa William</div>
                        <div className="text-white">James Estate Agents</div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
                    </div>
                    <div className="flex absolute z-10 top-0 left-0 p-3">
                      <div className="propertyPill mr-3">
                        <BsCameraFill className="mr-1" />6
                      </div>
                      <div className="propertyPill mr-1">
                        <VideoIcon />1
                      </div>
                    </div>
                    {item.pictures.length > 0 && (
                      <Image
                        src={String(item.pictures[0])}
                        sizes="100vw"
                        className="h-[320px] w-full object-cover"
                        width={0}
                        height={0}
                        alt="real"
                      />
                    )}
                  </div>
                  <div className="py-[30px] px-[12px] ">
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
                    <div className="flex mb-4">
                      <div className="text-black/70 text-[15px] font-semibold mr-2">
                        Added:
                      </div>
                      <div className="text-[14px]">June 15, 2020</div>
                    </div>
                    <div className="flex text-black mb-6">
                      <div className="text-sm mr-7">
                        <div className="font-bold mb-2">Bedrooms</div>
                        <div className="flex ">
                          <BedDouble className="text-[var(--primaryTextColor)] mr-3" />{' '}
                          {item.bedrooms}
                        </div>
                      </div>
                      <div className="text-sm mr-7">
                        <div className="font-bold mb-2">Bathrooms</div>
                        <div className="flex ">
                          <ShowerHead className="text-[var(--primaryTextColor)] mr-3" />{' '}
                          {item.bathrooms}
                        </div>
                      </div>
                      <div className="text-sm mr-7">
                        <div className="font-bold mb-2">Area</div>
                        <div className="flex ">
                          <LandPlot className="text-[var(--primaryTextColor)] mr-3" />{' '}
                          {item.area}
                          <span className="ml-2 text-[var(--primaryTextColor)]">
                            sq ft
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between ">
                      <div className="text-green-500 text-[20px]">
                        ₦{formatMoney(item.price)}
                      </div>
                      <div className="flex text-center items-center">
                        <div className="relative group inline-block mr-3">
                          <Heart className="w-7 h-7 cursor-pointer text-[var(--primaryTextColor)]" />
                          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-green-900 text-white text-xs px-1 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Add to Favorites
                          </div>
                        </div>

                        <div className="text-[30px] text-[var(--primaryTextColor)]">
                          <i className="bi bi-arrow-left-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
