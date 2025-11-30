// components/AuthLayout.tsx or app/auth/layout.tsx
import Image from 'next/image'
import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-black/50">
      {/* Full-screen background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/RealEstateImage.png')`,
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      <div className="relative z-10 w-full max-w-5xl mx-4">
        <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row">
          {/* Left Panel – Image + Quotes */}
          <div className="relative md:w-1/2 w-full h-64 md:h-auto overflow-hidden">
            <Image
              src="/signUpImage2.png"
              alt="Dream home"
              fill
              className="object-cover"
              priority
            />

            {/* Gradient overlay for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Quotes */}
            <div className="relative z-10 p-8 text-white flex flex-col justify-between h-full">
              <div>
                <p className="text-2xl md:text-3xl font-bold leading-tight">
                  "Every home has a story.
                  <br />
                  Let us help you find yours."
                </p>
              </div>
              <div>
                <p className="text-lg italic opacity-90">
                  "Schooling Social Developers."
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel – Form */}
          <div className="w-full md:w-1/2 bg-white p-6 sm:p-10 flex items-center justify-center min-h-[60vh]">
            <div className="w-full max-w-md">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
