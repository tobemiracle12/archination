'use client'
import Image from 'next/image'

import Link from 'next/link'
import BottomNavBar from '@/components/BottomNavBar'

export default function Welcome() {
  return (
    <section className="relative h-[100vh] w-full text-white overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find Your Dream Home
        </h1>
        <p className="mb-8 max-w-2xl text-sm md:text-lg">
          Real Homes provides the best solutions to help you easily buy, sell,
          or rent your next property.
        </p>
        <div className="flex justify-center w-full max-w-[700px]">
          <div className="grid grid-cols-2 gap-4 w-full text-[var(--tertiaryTextColor)]">
            <Link
              href={`/sign-in`}
              className="flex justify-center py-[10px] px-[25px] bg-[var(--primaryBackground)]  rounded-full  text-[20px]"
            >
              {' '}
              <Image
                src={'/GoogleIcon2.png'}
                sizes="100vw"
                className="h-[26px] mr-2 w-[26px]"
                width={0}
                height={0}
                alt="real"
              />
              Login with Google
            </Link>
            <Link
              href={`/sign-up`}
              className="flex justify-center py-[10px] px-[25px] bg-[var(--primaryBackground)] rounded-full text-[20px]"
            >
              {' '}
              <Image
                src={'/AppleIcon3.png'}
                sizes="100vw"
                className="h-[30px] mr-2 w-auto"
                width={0}
                height={0}
                alt="real"
              />
              Sign Up with Apple
            </Link>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </section>
  )
}
