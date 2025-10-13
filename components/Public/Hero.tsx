'use client'
import HeroSearchBar from './HeroSearchBar'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full text-white overflow-hidden">
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

        <HeroSearchBar />
      </div>
    </section>
  )
}
