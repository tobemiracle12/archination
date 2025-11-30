'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation } from 'swiper/modules'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { BedDouble, Heart, LandPlot, ShowerHeadIcon } from 'lucide-react'
import { useParams } from 'next/navigation'
import PropertyStore from '@/src/zustand/Property'
import { MessageStore } from '@/src/zustand/Message'
import { formatMoney } from '@/lib/helpers'
import MapBox from '@/components/Map'

function PropertyDetails() {
  const { id } = useParams()
  const {
    getProperty,
    resetForm,
    propertyForm,

    properties,
  } = PropertyStore()

  const { setMessage } = MessageStore()

  const url = '/properties'

  useEffect(() => {
    const initialize = async () => {
      if (id) {
        const existingItem = properties.find((item) => item._id === String(id))
        if (existingItem) {
          PropertyStore.setState({ propertyForm: existingItem })
        } else {
          await getProperty(`${url}/${id}`, setMessage)
        }
      }
    }

    initialize()
    return () => {
      resetForm()
    }
  }, [id])
  return (
    <div>
      <div className=" flex justify-center bg-[var(--secondaryBackground)] md:py-[30px] py-[30px]">
        <div className="customContainer">
          {propertyForm.pictures.length > 0 && (
            <div className="relative w-full md:min-h-[40vh] overflow-hidden md:mb-5 mb-2">
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
                className="h-full w-full max-w-[700px]  rounded-[20px]"
              >
                {propertyForm.pictures.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={String(item)}
                      sizes="100vw"
                      className="h-full w-full object-cover"
                      width={0}
                      height={0}
                      alt="real"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
          <div className="grid md:grid-cols-2 grid-cols-1 md:mb-10 mb-7">
            <div className="flex flex-col">
              <div className="text-[30px] text-black font-semibold mb-2">
                {propertyForm.name}
              </div>
              <div className="text-[16px] text-[var(--primaryTextColor)] mb-3">
                {propertyForm.address}
              </div>
            </div>
            <div className="flex md:justify-end items-start">
              <div className="md:border-l border-l-gray-400 md:mr-5 mr-0"></div>
              <div className="flex flex-col leading-8">
                <div className="text-[var(--secondaryTextColor)]">For Sale</div>
                <div className="md:text-[35px] text-[27px] text-[var(--customTextColor)]">
                  ₦{formatMoney(propertyForm.price)}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:col-span-2  bg-white shadow md:px-[25px] px-[14px] py-[15px] mb-5">
            <div className="flex justify-between w-full mb-6 flex-wrap">
              <div className="flex items-center mb-3">
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
                <div className="md:text-[30px] text-[18px] text-[var(--primaryTextColor)] relative">
                  <div className="relative group inline-block mr-6">
                    <i className="bi bi-share-fill"></i>
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-green-900 text-white text-xs px-1 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Share
                    </div>
                  </div>
                </div>
                <div className="relative group inline-block mr-6">
                  <Heart className="md:w-7 md:h-7 w-5 h-5 cursor-pointer text-[var(--primaryTextColor)]" />
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-green-900 text-white text-xs px-1 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Favorites
                  </div>
                </div>

                <div className="md:text-[30px] text-[18px] text-[var(--primaryTextColor)] relative">
                  <div className="relative group inline-block mr-6">
                    <i className="bi bi-arrow-left-right"></i>
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-green-900 text-white text-xs px-1 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Add to Compare
                    </div>
                  </div>
                </div>
                <div className="md:text-[30px] text-[18px] text-[var(--primaryTextColor)] relative">
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
                  {propertyForm.bedrooms}
                </div>
              </div>
              <div className="text-sm mr-7">
                <div className="font-bold mb-2">Bathrooms</div>
                <div className="flex ">
                  <ShowerHeadIcon className="text-[var(--primaryTextColor)] mr-3" />{' '}
                  {propertyForm.bathrooms}
                </div>
              </div>
              <div className="text-sm mr-7">
                <div className="font-bold mb-2">Area</div>
                <div className="flex ">
                  <LandPlot className="text-[var(--primaryTextColor)] mr-3" />{' '}
                  {propertyForm.area}
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
              {propertyForm.description}
            </div>
            <div className="text-[18px] text-[var(--customTextDarkColor)] font-semibold mb-3">
              Property Attachments Format
            </div>
            <div className="flex mb-5 flex-wrap">
              {propertyForm.documents.map((item, index) => (
                <div key={index} className="flex items-center mr-4">
                  <Link href={'/'}>
                    <i className="bi bi-file-earmark-pdf mr-2 md:text-[45px] text-[30px]"></i>
                  </Link>
                  <Link
                    href={'/'}
                    className="text-[20px] text-[var(--primaryTextColor)]"
                  >
                    demo
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-[20px] text-[var(--customTextDarkColor)] font-semibold mb-4">
              Property on Map
            </div>
            {propertyForm.lat && propertyForm.lng && (
              <MapBox lat={propertyForm.lat} lng={propertyForm.lng} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails
