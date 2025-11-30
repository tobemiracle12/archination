'use client'
import Link from 'next/link'

export default function BottomNavBar() {
  return (
    // <div className="sticky w-full z-30 bottom-3 flex justify-center ">
    //   <div className="grid grid-cols-4 bg-[var(--cardBackground)] rounded-full text-[var(--tertiaryTextColor)] w-full max-w-[1000px] overflow-hidden">
    //     <Link href={`/`} className="flex justify-center py-[10px] items-center">
    //       <div className="flex justify-center py-[5px] items-center bg-[var(--customTextColor)] text-white rounded-full px-[20px]">
    //         <i className="bi bi-house-fill mr-4 text-[25px]"></i>
    //         <div className="text-[20px]">Home</div>
    //       </div>
    //     </Link>
    //     <Link href={`/`} className="flex justify-center py-[10px] items-center">
    //       <i className="bi bi-hourglass-split text-[var(--tertiaryTextColor)] mr-4 text-[25px]"></i>
    //       <div className="text-[var(--tertiaryTextColor)] text-[20px]">
    //         Auction
    //       </div>
    //     </Link>
    //     <Link href={`/`} className="flex justify-center py-[10px] items-center">
    //       <i className="bi bi-heart-fill text-[var(--customTextColor)] mr-4 text-[25px]"></i>
    //       <div className="text-[var(--tertiaryTextColor)] text-[20px]">
    //         Favourite
    //       </div>
    //     </Link>
    //     <Link href={`/`} className="flex justify-center py-[10px] items-center">
    //       <i className="bi bi-person-fill text-[var(--customTextColor)] mr-4 text-[25px]"></i>
    //       <div className="text-[var(--tertiaryTextColor)] text-[20px]">
    //         Profile
    //       </div>
    //     </Link>
    //   </div>
    // </div>

    <div className="flex bottom-3 justify-center w-full sticky z-40">
      <div className="grid grid-cols-4 rounded-full w-full max-w-[650px] bg-[var(--primaryBackground)]">
        <Link href={`/`} className="flex items-center py-[10px] justify-center">
          <div className="flex items-center py-[5px] px-[20px] justify-center bg-[var(--customTextColor)] rounded-full text-white">
            <i className="bi bi-house-fill mr-4  text-[25px]"></i>
            <div className="text-[20px]">Home</div>
          </div>
        </Link>
        <Link href={`/`} className="flex items-center py-[10px] justify-center">
          <i className="bi bi-hourglass-split mr-2 text-[var(--tertiaryTextColor)] text-[25px]"></i>
          <div className="text-[20px] text-[var(--tertiaryTextColor)]">
            Auction
          </div>
        </Link>
        <Link href={`/`} className="flex items-center py-[10px] justify-center">
          <i className="bi bi-app-indicator mr-2 text-[var(--tertiaryTextColor)] text-[25px]"></i>
          <div className="text-[20px] text-[var(--tertiaryTextColor)]">
            Plans
          </div>
        </Link>
        <Link
          href={`/sign-up`}
          className="flex items-center py-[10px] justify-center"
        >
          <i className="bi bi-person-fill text-[var(--tertiaryTextColor)] text-[25px] mr-2"></i>
          <div className="text-[20px] text-[var(--tertiaryTextColor)]">
            Profile
          </div>
        </Link>
      </div>
    </div>
  )
}
