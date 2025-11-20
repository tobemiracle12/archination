'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import 'swiper/css'

import { BedDouble, LandPlot, ShowerHead } from 'lucide-react'

function Map() {
  return (
    <div>
      <div className="flex  justify-center bg-[url('/blogImage1.jpg')] bg-fixed bg-cover bg-no-repeat bg-center">
        <div className="flex w-full bg-green-500/40 py-[100px] justify-center">
          <div className="customContainer">
            <div className="flex text-white md:text-[40px] text-[30px]">
              Half Map Layout
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="border w-full md:h-full h-[50vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254106.01784629122!2d7.09168786206372!3d5.654186360056148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10428e19657129ff%3A0x9431a596167553d9!2sImo!5e0!3m2!1sen!2sng!4v1759995760046!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="py-[60px] px-[10px] flex justify-start">
          <div className="flex flex-col">
            {/* CARD ITEM */}
            <div className="t md:max-w-[600px] mb-7 flex-wrap">
              <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-[6px]">
                {/* IMAGE SECTION */}
                <div className="flex relative w-full md:w-1/2">
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
                    className="h-full w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>

                {/* CONTENT SECTION */}
                <div className="py-[30px] px-[12px] w-full md:w-1/2">
                  <div className="text-[20px] text-black font-semibold hover:text-green-500 transition duration-300 mb-6">
                    <Link href={'/'}>Home in Merrick Way</Link>
                  </div>

                  <div className="flex flex-wrap text-black mb-4 gap-3">
                    <div className="text-sm">
                      <div className="font-bold mb-2">Bedrooms</div>
                      <div className="flex ">
                        <BedDouble className="text-[var(--primaryTextColor)] mr-3" />{' '}
                        3
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-bold mb-2">Bathrooms</div>
                      <div className="flex ">
                        <ShowerHead className="text-[var(--primaryTextColor)] mr-3" />{' '}
                        3
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-bold mb-2">Area</div>
                      <div className="flex">
                        <LandPlot className="text-[var(--primaryTextColor)] mr-3" />{' '}
                        4300
                        <span className="ml-2 text-[var(--primaryTextColor)]">
                          sq ft
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col leading-8">
                    <div className="text-[var(--secondaryTextColor)]">
                      For Sale
                    </div>
                    <div className="text-[30px] text-[var(--customTextColor)]">
                      $540,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CARD ITEM */}
            <div className="t md:max-w-[600px] mb-7 flex-wrap">
              <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-[6px]">
                {/* IMAGE SECTION */}
                <div className="flex relative w-full md:w-1/2">
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
                    className="h-full w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>

                {/* CONTENT SECTION */}
                <div className="py-[30px] px-[12px] w-full md:w-1/2">
                  <div className="text-[20px] text-black font-semibold hover:text-green-500 transition duration-300 mb-6">
                    <Link href={'/'}>Home in Merrick Way</Link>
                  </div>

                  <div className="flex flex-wrap text-black mb-4 gap-3">
                    <div className="text-sm">
                      <div className="font-bold mb-2">Bedrooms</div>
                      <div className="flex ">
                        <BedDouble className="text-[var(--primaryTextColor)] mr-3" />{' '}
                        3
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-bold mb-2">Bathrooms</div>
                      <div className="flex ">
                        <ShowerHead className="text-[var(--primaryTextColor)] mr-3" />{' '}
                        3
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-bold mb-2">Area</div>
                      <div className="flex">
                        <LandPlot className="text-[var(--primaryTextColor)] mr-3" />{' '}
                        4300
                        <span className="ml-2 text-[var(--primaryTextColor)]">
                          sq ft
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col leading-8">
                    <div className="text-[var(--secondaryTextColor)]">
                      For Sale
                    </div>
                    <div className="text-[30px] text-[var(--customTextColor)]">
                      $540,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CARD ITEM */}
            <div className="t md:max-w-[600px] mb-7 flex-wrap">
              <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-[6px]">
                {/* IMAGE SECTION */}
                <div className="flex relative w-full md:w-1/2">
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
                    className="h-full w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>

                {/* CONTENT SECTION */}
                <div className="py-[30px] px-[12px] w-full md:w-1/2">
                  <div className="text-[20px] text-black font-semibold hover:text-green-500 transition duration-300 mb-6">
                    <Link href={'/'}>Home in Merrick Way</Link>
                  </div>

                  <div className="flex flex-wrap text-black mb-4 gap-3">
                    <div className="text-sm">
                      <div className="font-bold mb-2">Bedrooms</div>
                      <div className="flex ">
                        <BedDouble className="text-[var(--primaryTextColor)] mr-3" />{' '}
                        3
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-bold mb-2">Bathrooms</div>
                      <div className="flex ">
                        <ShowerHead className="text-[var(--primaryTextColor)] mr-3" />{' '}
                        3
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-bold mb-2">Area</div>
                      <div className="flex">
                        <LandPlot className="text-[var(--primaryTextColor)] mr-3" />{' '}
                        4300
                        <span className="ml-2 text-[var(--primaryTextColor)]">
                          sq ft
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col leading-8">
                    <div className="text-[var(--secondaryTextColor)]">
                      For Sale
                    </div>
                    <div className="text-[30px] text-[var(--customTextColor)]">
                      $540,000
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat other cards same structure */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
