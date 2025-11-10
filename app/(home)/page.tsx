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
export default function Home() {
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

  const partners = [
    '/partner1.png',
    '/partner2.png',
    '/partner3.png',
    '/partner4.png',
    '/partner5.png',
  ]
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
                    className="h-[320px] w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
                <div className="py-[30px] px-[12px] ">
                  <div className="text-[20px] text-black font-semibold hover:text-green-500 transition duration-300 mb-2">
                    {' '}
                    <Link href={'/'} className="">
                      Home in Merrick Way
                    </Link>
                  </div>
                  <div className="flex mb-3">
                    <Link href={'/'}>
                      {' '}
                      <i className="bi bi-geo-alt-fill mr-2 text-[15px] text-green-500 underline">
                        {' '}
                        Merrick Way, Miami, FL 33134, USA
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
                  <div className="flex items-center justify-between ">
                    <div className="text-green-500 text-[20px]">$540,000</div>
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
              <div className="flex overflow-hidden bg-white  flex-col rounded-[6px]">
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
                    className="h-[320px] w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
                <div className="py-[30px] px-[12px] ">
                  <div className="text-[20px] text-black font-semibold hover:text-green-500 transition duration-300 mb-2">
                    {' '}
                    <Link href={'/'} className="">
                      Home in Merrick Way
                    </Link>
                  </div>
                  <div className="flex mb-3">
                    <Link href={'/'}>
                      {' '}
                      <i className="bi bi-geo-alt-fill mr-2 text-[15px] text-green-500 underline">
                        {' '}
                        Merrick Way, Miami, FL 33134, USA
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
                  <div className="flex items-center justify-between">
                    <div className="text-green-500 text-[20px]">$540,000</div>
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
                    className="h-[320px] w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
                <div className="py-[30px] px-[12px] ">
                  <div className="text-[20px] text-black font-semibold hover:text-green-500 transition duration-300 mb-2">
                    {' '}
                    <Link href={'/'} className="">
                      Home in Merrick Way
                    </Link>
                  </div>
                  <div className="flex mb-3">
                    <Link href={'/'}>
                      {' '}
                      <i className="bi bi-geo-alt-fill mr-2 text-[15px] text-green-500 underline">
                        {' '}
                        Merrick Way, Miami, FL 33134, USA
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
                  <div className="flex items-center justify-between">
                    <div className="text-green-500 text-[20px]">$540,000</div>
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
            </div>
          </div>
        </div>
      </div>

      {/* ///////BLOG1 SECTION//////////// */}
      <div className="flex  justify-center bg-[url('/blogImage1.jpg')] bg-fixed bg-cover bg-no-repeat bg-center">
        <div className="flex w-full bg-green-500/40 py-[100px] justify-center">
          <div className="customContainer">
            <div className="flex justify-center">
              <div className="flex flex-col text-center justify-center max-w-[800px]">
                <div className="md:text-[30px] text-[25px] text-white mb-2 font-bold">
                  Looking to Buy a new property or Sell an existing one?
                  RealHomes provides an easy solution!
                </div>
                <hr className="border-t-2 border-white w-[100px] mx-auto mt-3 mb-7" />
                <div className="text=[12px] text-white text-center mb-8 font-semibold">
                  RealHomes gracefully facilitates real estate business owners
                  by making property management easier & affordable.
                </div>
                <div className="flex justify-center">
                  <Link href={'/'} className="">
                    <div className="text-[15px] mr-5 cursor-pointer  transition duration-300 text-white py-3 px-6 bg-[var(--customTextColor)]/80">
                      Submit Property
                    </div>
                  </Link>
                  <Link href={'/'} className="">
                    <div className="text-[15px] cursor-pointer hover:bg-transparent transition duration-300 text-white py-3 px-6 bg-gray-500">
                      Browse Property
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>{' '}
        </div>
      </div>

      {/* ///////BLOG2 SECTION//////////// */}
      <FeatureHomes />

      {/* ////TESTIMONIAL SECTION//// */}
      <div className="flex py-[75px] bg-[var(--secondaryBackground)] justify-center">
        <div className="customContainer">
          <div className="flex flex-col justify-center text-center">
            <div className="text-[30px] text-[var(--tertiaryTextColor)] font-semibold mb-5">
              Words From Our Customers
            </div>
            <div className="t"></div>
            <div className="text mb-12">
              We honoured to have these amzaing Customers
            </div>

            <Swiper
              modules={[Pagination, Navigation]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              spaceBetween={30}
              slidesPerView={1} // ✅ Default for mobile
              breakpoints={{
                640: {
                  slidesPerView: 1, // ✅ Mobile
                },
                768: {
                  slidesPerView: 2, // ✅ Tablet
                },
                1024: {
                  slidesPerView: 3, // ✅ Desktop
                },
              }}
              className="w-full"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="text-start">
                    <div className="flex relative p-3 flex-col justify-start bg-white py-[20px] mb-7">
                      <div className="text mb-4">{item.content}</div>
                      <div className="space-x-1">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <div className="w-5 h-5 bg-white rotate-45 absolute -bottom-[10px]"></div>
                    </div>
                    <div className="flex">
                      <Image
                        src={item.picture}
                        sizes="100vw"
                        className="h-[50px] mr-2 object-cover rounded-full w-[50px]"
                        width={0}
                        height={0}
                        alt="real"
                      />
                      <div>
                        <div className="text-lg font-bold text-black">
                          {item.name}
                        </div>
                        <div className="">{item.position} </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* ////PARTNER SECTION//// */}
      <div className="flex py-[60px] bg-white justify-center">
        <div className="customContainer">
          <div className="flex items-center space-x-12 justify-between">
            <Swiper
              modules={[Pagination, Navigation]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              spaceBetween={30}
              slidesPerView={2} // ✅ Default for mobile
              breakpoints={{
                640: {
                  slidesPerView: 2, // ✅ Mobile
                },
                768: {
                  slidesPerView: 3, // ✅ Tablet
                },
                1024: {
                  slidesPerView: 5, // ✅ Desktop
                },
              }}
              className="w-full"
            >
              {partners.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link href="/" className="block justify-center">
                    <Image
                      src={item}
                      sizes="100vw"
                      className="h-[100px] w-auto object-contain"
                      width={0}
                      height={0}
                      alt="real"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
