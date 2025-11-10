'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import {
  BedDouble,
  Heart,
  LandPlot,
  ShowerHead,
  ShowerHeadIcon,
} from 'lucide-react'

function Services() {
  return (
    <div>
      <div className="flex  justify-center bg-[url('/blogImage1.jpg')] bg-fixed bg-cover bg-no-repeat bg-center">
        <div className="flex w-full bg-green-500/40 py-[100px] justify-center">
          <div className="customContainer">
            <div className="flex text-white md:text-[40px] text-[30px]">
              Agencies
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center bg-[var(--secondaryBackground)] py-[120px]">
        <div className="customContainer">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 items-start">
            <div className="flex flex-col md:col-span-2">
              <div className="flex flex-col  bg-white shadow px-[25px] py-[15px] mb-16">
                <div className="flex mb-7 flex-wrap">
                  <Image
                    src="/serviceImage1.png"
                    sizes="100vw"
                    className="h-[120px] object-cover rounded-[7px] w-[120px] mr-4 -mt-[45px] mb-4"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="flex flex-col leading-6">
                    <div className="flex mb-3">
                      <Link
                        href={'/'}
                        className="text-[23px] text-[var(--secondaryTextColor)] hover:text-[var(--customTextDarkColor)] font-bold)]"
                      >
                        Real Estate Advisory & Consultancy{' '}
                        <i className="bi bi-check-circle-fill text-[var(--customTextDarkColor)] text-[25px]"></i>
                      </Link>
                    </div>
                    <div className="text-[18px] text-[var(--primaryTextColor)]">
                      Professional Guidance for Smarter Property Decisions
                    </div>
                  </div>
                </div>
                <div className="text-[var(--primaryTextColor)] w-full mb-10">
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line. Podcasting operational change
                  management…
                </div>
                <div className="text-[var(--customTextDarkColor)]  hover:text-green-700 mr-7 font-bold">
                  Know More{' '}
                  <i className="bi bi-chevron-right text-[var(--customTextDarkColor)]"></i>
                </div>
              </div>
              <div className="flex flex-col  bg-white shadow px-[25px] py-[15px] mb-15">
                <div className="flex mb-7 flex-wrap">
                  <Image
                    src="/serviceImage2.png"
                    sizes="100vw"
                    className="h-[120px] object-cover rounded-[7px] w-[120px] mr-4 -mt-[45px] mb-4"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="flex flex-col leading-6">
                    <div className="flex mb-3">
                      <Link
                        href={'/'}
                        className="text-[23px] text-[var(--secondaryTextColor)] hover:text-[var(--customTextDarkColor)] font-bold)]"
                      >
                        Property Management{' '}
                        <i className="bi bi-check-circle-fill text-[var(--customTextDarkColor)] text-[25px]"></i>
                      </Link>
                    </div>
                    <div className="text-[18px] text-[var(--primaryTextColor)]">
                      Expert Care for Your Real Estate Investment
                    </div>
                  </div>
                </div>
                <div className="text-[var(--primaryTextColor)] mb-10">
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line. Podcasting operational change
                  management…
                </div>
                <div className="text-[var(--customTextDarkColor)]  hover:text-green-700 mr-7 font-bold">
                  Know More{' '}
                  <i className="bi bi-chevron-right text-[var(--customTextDarkColor)]"></i>
                </div>
              </div>
            </div>
            <div className="flex flex-col -mt-[60px]">
              <div className="text-[var(--tertiaryTextColor)] text-[25px] mb-3">
                Featured Properties
              </div>
              <div className="flex overflow-hidden bg-white flex-col rounded-[6px]">
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
                  <Image
                    src="/Feature1.jpg"
                    sizes="100vw"
                    className="h-[320px] w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
                <div className="py-[30px] px-[12px] ">
                  <div className="text-[20px] text-black font-semibold hover:text-green-500 transition duration-300 mb-3">
                    {' '}
                    <Link href={'/'} className="">
                      Home in Merrick Way
                    </Link>
                  </div>
                  <div className="text-[17px] text-[var(--tertiaryTextColor)] mb-3">
                    Enchanting three bedroom, three bath home with spacious one
                    bedroom,…
                  </div>
                  <div className="flex text-black mb-6">
                    <div className="text-sm mr-7">
                      <div className="font-bold mb-2">Bedrooms</div>
                      <div className="flex ">
                        <BedDouble className="text-[var(--primaryTextColor)] mr-3" />{' '}
                        3
                      </div>
                    </div>
                    <div className="text-sm mr-7">
                      <div className="font-bold mb-2">Bathrooms</div>
                      <div className="flex ">
                        <ShowerHead className="text-[var(--primaryTextColor)] mr-3" />{' '}
                        3
                      </div>
                    </div>
                    <div className="text-sm mr-7">
                      <div className="font-bold mb-2">Area</div>
                      <div className="flex ">
                        <LandPlot className="text-[var(--primaryTextColor)] mr-3" />{' '}
                        4300
                        <span className="ml-2 text-[var(--primaryTextColor)]">
                          sq ft
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[var(--tertiaryTextColor)] font-bold">
                      For Sale
                    </div>
                    <div className="flex items-center justify-between ">
                      <div className="text-green-500 text-[20px]">$540,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
