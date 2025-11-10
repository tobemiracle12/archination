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
  Heart,
  LandPlot,
  ShowerHead,
  ShowerHeadIcon,
  VideoIcon,
} from 'lucide-react'
import FeatureHomes from '@/components/Public/FeatureHomes'
export default function Design() {
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
    <div>
      <Hero />

      {/* ///////BLOG1 GALLERY SECTION//////////// */}
      <div className="flex justify-center bg-[var(--secondaryBackground)] py-[75px]">
        <div className="customContainer">
          <div className="flex flex-col">
            <div className="flex flex-col text-center">
              <div className="md:text-[30px] text-[25px] text-black font-bold mb-2">
                Design Gallery
              </div>
              <div className="t">
                <hr className="border-t-2 border-b-green-300 w-[100px] mx-auto mt-3 mb-4" />
              </div>
              <div className="text md:mb-12 mb-8">
                Check out some of our latest properties.
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              <div className="flex overflow-hidden bg-white shadow-lg flex-col rounded-[6px]">
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
                  <Image
                    src="/Feature1.jpg"
                    sizes="100vw"
                    className="h-[300px] w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
              </div>
              <div className="flex overflow-hidden bg-white shadow-lg flex-col rounded-[6px]">
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
                  <Image
                    src="/Feature1.jpg"
                    sizes="100vw"
                    className="h-[300px] w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
              </div>
              <div className="flex overflow-hidden bg-white shadow-lg flex-col rounded-[6px]">
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
                  <Image
                    src="/Feature1.jpg"
                    sizes="100vw"
                    className="h-[300px] w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
              </div>
              <div className="flex overflow-hidden bg-white shadow-lg flex-col rounded-[6px]">
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
                  <Image
                    src="/Feature1.jpg"
                    sizes="100vw"
                    className="h-[300px] w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
              </div>
              <div className="flex overflow-hidden bg-white shadow-lg flex-col rounded-[6px]">
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
                  <Image
                    src="/Feature1.jpg"
                    sizes="100vw"
                    className="h-[300px] w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
              </div>
              <div className="flex overflow-hidden bg-white shadow-lg flex-col rounded-[6px]">
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
                  <Image
                    src="/Feature1.jpg"
                    sizes="100vw"
                    className="h-[300px] w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
