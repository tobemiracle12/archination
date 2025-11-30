import Image from 'next/image'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      className="inset-0 z-50 flex items-center justify-center min-h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/RealEstateImage.png')`,
        backgroundAttachment: 'fixed', // optional: parallax feel
      }}
    >
      <div className="w-full">
        <div className="flex w-full justify-center">
          <div className="relative flex flex-col w-full md:max-w-4xl md:rounded-[15px] bg-white shadow-lg md:flex-row overflow-hidden">
            {/* Left Panel - Quote Section */}
            <div className="md:w-1/2 w-full h-[40vh] md:h-full flex-col justify-center bg-cover bg-center  md:flex overflow-hidden rounded-bl-[15px] md:rounded-tr-[15px] rounded-br-[15px] relative">
              <div className="text-white text-[20px] absolute top-20 left-0 px-4 font-bold">
                "Every home has a story. Let us help you find yours."
              </div>
              <Image
                src="/signUpImage2.png"
                loading="lazy"
                sizes="100vw"
                className="h-full w-full object-cover"
                width={0}
                height={0}
                alt="Archination Logo"
              />
              <div className="text-white absolute bottom-10 left-0 px-4">
                "Schooling Social Developers."
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="w-full sm:px-8 px-3 py-8 md:w-1/2 min-h-[80vh]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
