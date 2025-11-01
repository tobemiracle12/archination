'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { BedDouble, Heart, LandPlot, ShowerHeadIcon } from 'lucide-react'

function PropertyDetails() {
  return (
    <div>
      <div className="flex  justify-center bg-[url('/blogImage1.jpg')] bg-fixed bg-cover bg-no-repeat bg-center">
        <div className="flex w-full bg-green-500/40 py-[100px] justify-center">
          <div className="customContainer">
            <div className="flex text-white text-[40px]">
              Home in Merrick Way
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center bg-[var(--secondaryBackground)] py-[75px]">
        <div className="customContainer">
          <div className="flex flex-col">
            <div className="grid grid-cols-2 mb-10">
              <div className="flex flex-col">
                <div className="text-[20px] text-black font-semibold mb-2">
                  Home in Merrick Way
                </div>
                <div className="text-[16px] text-[var(--primaryTextColor)]">
                  Merrick Way, Miami, FL 33134, USA
                </div>
              </div>
              <div className="flex justify-end">
                <div className="border-l border-l-gray-400 mr-5"></div>
                <div className="flex flex-col leading-8">
                  <div className="text-[var(--secondaryTextColor)]">
                    For Sale
                  </div>
                  <div className="text-[35px] text-[var(--customTextColor)]">
                    $540,000
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full min-h-[75vh] rounded-[5px] overflow-hidden mb-20">
              <Swiper
                modules={[EffectFade, Autoplay, Navigation]}
                navigation
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                speed={3000}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                onInit={(swiper) => {
                  // Attach navigation manually after initialization

                  swiper.navigation.init()
                  swiper.navigation.update()
                }}
                className="h-full w-full"
              >
                <SwiperSlide>
                  <Image
                    src="/propertyImage0.jpg"
                    sizes="100vw"
                    className="h-full w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/propertyImage2.jpg"
                    sizes="100vw"
                    className="h-full w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/propertyImage3.jpg"
                    sizes="100vw"
                    className="h-full w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-7">
            <div className="flex flex-col col-span-2  bg-white shadow px-[25px] py-[15px]">
              <div className="flex justify-between w-full mb-6">
                <div className="flex items-center ">
                  <div className="text-[15px] text-[var(--secondaryTextColor)] mr-1">
                    Property ID:
                  </div>
                  <div className="text-[17px] text-[var(--customTextColor)] mr-1">
                    RH-2015-06
                  </div>
                  <div className="text-white bg-[var(--customTextColor)] p-[2px]">
                    Featured
                  </div>
                </div>
                <div className="flex text-center items-center">
                  <div className="text-[30px] text-[var(--primaryTextColor)] relative">
                    <div className="relative group inline-block mr-6">
                      <i className="bi bi-share-fill"></i>
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-green-900 text-white text-xs px-1 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Share
                      </div>
                    </div>
                  </div>
                  <div className="relative group inline-block mr-6">
                    <Heart className="w-7 h-7 cursor-pointer text-[var(--primaryTextColor)]" />
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-green-900 text-white text-xs px-1 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Add to Favorites
                    </div>
                  </div>

                  <div className="text-[30px] text-[var(--primaryTextColor)] relative">
                    <div className="relative group inline-block mr-6">
                      <i className="bi bi-arrow-left-right"></i>
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-green-900 text-white text-xs px-1 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Add to Compare
                      </div>
                    </div>
                  </div>
                  <div className="text-[30px] text-[var(--primaryTextColor)] relative">
                    <div className="relative group inline-block">
                      <i className="bi bi-printer"></i>
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-green-900 text-white text-xs px-1 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Print
                      </div>
                    </div>
                  </div>
                </div>
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
                    <ShowerHeadIcon className="text-[var(--primaryTextColor)] mr-3" />{' '}
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
              <div className="text-[20px] text-[var(--customTextDarkColor)] font-semibold mb-5">
                Description
              </div>
              <div className="text-[var(--primaryTextColor)] mb-6">
                Enchanting three bedroom, three bath home with spacious one
                bedroom, one bath cabana, in-laws quarters. Charming living area
                features fireplace and fabulous art deco details. Formal dining
                room. Remodeled kitchen with granite countertops, white
                cabinetry and stainless appliances. Lovely master bedroom has
                updated bath, beautiful view of the pool. Guest bedrooms have
                walk-in, cedar closets. Delightful backyard; majestic oaks
                surround the free form pool and expansive patio, wet bar and
                grill.
              </div>
              <div className="text-[20px] text-[var(--customTextDarkColor)] font-semibold mb-4">
                Feautures
              </div>
              <div className="flex items-center">
                <i className="bi bi-check-lg text-[20px] mr-1 "></i>
                <div className="text-[var(--primaryTextColor)] mb-1">
                  Main Floor Master Bedroom, Walk-In Closet
                </div>
              </div>
              <div className="flex items-center">
                <i className="bi bi-check-lg text-[20px] mr-1 "></i>
                <div className="text-[var(--primaryTextColor)] mb-1">
                  Main Floor Master Bedroom, Walk-In Closet
                </div>
              </div>
              <div className="flex items-center">
                <i className="bi bi-check-lg text-[20px] mr-1 "></i>
                <div className="text-[var(--primaryTextColor)] mb-1">
                  Main Floor Master Bedroom, Walk-In Closet
                </div>
              </div>
              <div className="flex items-center mb-5">
                <i className="bi bi-check-lg text-[20px] mr-1 "></i>
                <div className="text-[var(--primaryTextColor)]">
                  Main Floor Master Bedroom, Walk-In Closet
                </div>
              </div>
              <div className="text-[18px] text-[var(--customTextDarkColor)] font-semibold mb-3">
                Property Attachments Format
              </div>
              <div className="flex mb-5">
                <div className="flex items-center mr-4">
                  <Link href={'/'}>
                    <i className="bi bi-file-earmark-pdf mr-2 text-[45px]"></i>
                  </Link>
                  <Link
                    href={'/'}
                    className="text-[20px] text-[var(--primaryTextColor)]"
                  >
                    demo
                  </Link>
                </div>
                <div className="flex items-center mr-4">
                  <Link href={'/'}>
                    <i className="bi bi-file-earmark-pdf mr-2 text-[45px]"></i>
                  </Link>
                  <Link
                    href={'/'}
                    className="text-[20px] text-[var(--primaryTextColor)]"
                  >
                    demo
                  </Link>
                </div>
                <div className="flex items-center mr-4">
                  <Link href={'/'}>
                    <i className="bi bi-file-earmark-pdf mr-2 text-[45px]"></i>
                  </Link>
                  <Link
                    href={'/'}
                    className="text-[20px] text-[var(--primaryTextColor)]"
                  >
                    demo
                  </Link>
                </div>
              </div>
              <div className="text-[20px] text-[var(--customTextDarkColor)] font-semibold mb-4">
                Property on Map
              </div>
              <div className="border w-full h-[300px]">
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
            </div>
            <div className="flex flex-col w-full bg-white shadow items-center px-[20px]">
              <Image
                src="/propertyImage4.jpg"
                sizes="100vw"
                className="h-[120px] object-cover rounded-[7px] w-[120px] mb-3 -mt-[45px]"
                width={0}
                height={0}
                alt="real"
              />
              <div className="flex mb-4">
                <Link
                  href={'/'}
                  className="text-[23px] text-[var(--secondaryTextColor)] hover:text-[var(--customTextDarkColor)] font-bold)]"
                >
                  Agent Melissa William{' '}
                  <i className="bi bi-check-circle-fill text-[var(--customTextDarkColor)] text-[25px]"></i>
                </Link>
              </div>
              <div className="flex mb-2">
                <div className="text mr-1">Office:</div>
                <div className="text-black">1-222-333-4444</div>
              </div>
              <div className="flex mb-2">
                <div className="text mr-1">Mobile:</div>
                <div className="text-black"> 1-234-456-7892</div>
              </div>
              <div className="flex mb-2">
                <div className="text mr-1">Fax:</div>
                <div className="text-black">1-333-444-5555</div>
              </div>
              <div className="flex mb-2">
                <div className="text mr-1">WhatsApp:</div>
                <div className="text-black"> 1-222-333-4422</div>
              </div>
              <div className="flex mb-3">
                <div className="text mr-1">Email:</div>
                <div className="text-black">robot@inspirythemes.com</div>
              </div>
              <Link
                href={'/'}
                className="text-[17px] text-white border bg-[var(--customTextDarkColor)] hover:bg-green-700 rounded-[5px] text-center py-[15px] px-[15px] mb-4 w-full px-[]"
              >
                View My Listings
              </Link>
              <div className="contactInput">
                <label className="mb-1" htmlFor="">
                  Message
                </label>

                <textarea
                  placeholder="Hello, I am interested in [Home in Merrick Way.]"
                  className="p-3 border border-gray-200 outline-0 text-black rounded resize-none min-h-[200px]"
                  name=""
                  id=""
                ></textarea>
              </div>
              <div className="text-white py-3 px-3 bg-[var(--customTextDarkColor)] hover:bg-green-700 tansition transition duration-300 rounded-[5px] mb-10">
                Send Message
              </div>
              <div className="relative mb-3 rounded-[5px] overflow-hidden">
                <Image
                  src="/propertyImage5.jpg"
                  sizes="100vw"
                  className="h-full w-full  object-cover"
                  width={0}
                  height={0}
                  alt="real"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
                <div className="flex flex-col absolute bottom-0 items-start p-6">
                  <Link
                    href={'/'}
                    className="px-[7px] py-[2px] z-10  bg-[var(--customTextColor)] text-white text-[12px] mb-2"
                  >
                    AMERICA
                  </Link>
                  <Link
                    href={'/'}
                    className="z-10 text-white text-[17px] mb-2 font-bold"
                  >
                    Novak appeals in court against dear less Care cancellation
                    of
                  </Link>
                  <div className="flex items-center ">
                    <div className="text mr-1  text-white text-[12px]">BY</div>
                    <Link
                      href={'/'}
                      className="  text-white text-[12px] mr-4 font-bold"
                    >
                      ADMIN
                    </Link>
                    <div className="text-white flex">
                      <i className="bi bi-calendar mr-2"></i>
                      <div className="text-white">January 21, 2022</div>
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

export default PropertyDetails
