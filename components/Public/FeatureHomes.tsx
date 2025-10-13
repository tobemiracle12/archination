'use client'
import Link from 'next/link'
import Hero from '@/components/Public/Hero'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CameraIcon } from '@heroicons/react/24/solid'
import { BsCamera, BsCameraFill } from 'react-icons/bs'
import {
  BathIcon,
  BedDouble,
  LandPlot,
  ShowerHead,
  ShowerHeadIcon,
  VideoIcon,
} from 'lucide-react'
export default function FeatureHomes() {
  const testimonials = [
    {
      picture: '/TestiImage1.jpg',
      content:
        'This is the best place to buy and sell anything real estate related and you get it at one piece. They are so sincere.',
      name: 'Liza Bryan',
      position: 'Real Estate Owner',
    },
    {
      picture: '/TestiImage2.jpg',
      content:
        'This is the best place to buy and sell anything real estate related and you get it at one piece. They are so sincere.',
      name: 'Liza Bryan',
      position: 'Real Estate Owner',
    },
    {
      picture: '/TestiImage3.jpg',
      content:
        'This is the best place to buy and sell anything real estate related and you get it at one piece. They are so sincere.',
      name: 'Liza Bryan',
      position: 'Real Estate Owner',
    },
    {
      picture: '/TestiImage3.jpg',
      content:
        'This is the best place to buy and sell anything real estate related and you get it at one piece. They are so sincere.',
      name: 'Liza Bryan',
      position: 'Real Estate Owner',
    },
  ]
  return (
    <div className="flex py-[100px] justify-center bg-white">
      <div className="customContainer">
        <div className="flex flex-col">
          <div className="flex flex-col text-center">
            <div className="text-[32px] mb-1 font-bold text-black">
              Featured Properties
            </div>
            <hr className="border-t-2 border-b-green-300 w-[100px] mx-auto mt-3 mb-4" />
            <div className="text-[16px] mb-10">
              Check out some of our featured properties.
            </div>
          </div>

          <div className="">
            <Swiper
              modules={[Navigation]}
              navigation
              autoplay={{ delay: 3000 }}
              spaceBetween={30}
              slidesPerView={1}
              className="max-w-[600px]"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide className="pb-10" key={index}>
                  <div className="flex flex-col items-center">
                    <div className="flex relative">
                      <div className="flex absolute top-0 left-0 p-3">
                        <div className="flex text-white bg-black/50 hover:bg-black cursor-pointer rounded-[5px] items-center py-[2px] px-1 mr-3">
                          <BsCameraFill className="mr-1" /> 4
                        </div>
                        <div className="flex text-white bg-black/50 hover:bg-black cursor-pointer rounded-[5px] items-center py-[2px] px-1">
                          <VideoIcon className="mr-1" /> 1
                        </div>
                      </div>
                      <Image
                        src="/Feature1.jpg"
                        sizes="100vw"
                        className="h-[320px] w-full rounded-[5px] object-cover"
                        width={0}
                        height={0}
                        alt="real"
                      />
                    </div>
                    <div className="bg-white shadow-lg rounded-[6px] py-[40px] px-[35px] max-w-[80%] -mt-[50px] z-30">
                      <div className="text-[25px] text-black font-semibold hover:text-green-500 transition duration-300 mb-2">
                        {' '}
                        <Link href={'/'} className="">
                          Home in Merrick Way
                        </Link>
                      </div>
                      <div className="text line-clamp-2 overflow-ellipsis mb-5">
                        RealHomes gracefully facilitates real estate business
                        owners by making property management easier &
                        affordable.RealHomes gracefully facilitates real estate
                        business owners by making property management easier &
                        affordable.
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="text-black/70 text-[15px] mr-2">
                          Added:
                        </div>
                        <div className="text-[var(--primaryTextColor)] text-[13px]">
                          June 15, 2020
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
                      <div className="flex items-center">
                        <div className="flex flex-col mr-60">
                          <div className="text-black text-[15px] font-bold">
                            For Sale
                          </div>
                          <div className="text-green-500 text-[23px]">
                            $540,000
                          </div>
                        </div>
                        <div className="flex text-center">
                          <div className="text-[30px] text-[var(--primaryTextColor)] mr-3">
                            <i className="bi bi-suit-heart-fill"></i>
                          </div>
                          <div className="text-[30px] text-[var(--primaryTextColor)]">
                            <i className="bi bi-arrow-left-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
