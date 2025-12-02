'use client'
import { useAuthStore } from '@/src/authStore'
import Link from 'next/link'

export default function BottomNavBar() {
  const { user } = useAuthStore()

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

    <div className="flex sm:bottom-3 bottom-0 justify-center w-full sm:sticky z-40 fixed">
      <div className="grid grid-cols-4 rounded-tl-lg rounded-tr-lg w-full max-w-[650px] bg-[var(--primaryBackground)] sm:rounded-full border border-[var(--borderColor)]">
        <Link href={`/`} className="bottomNavItem">
          <i className="bi bi-house-fill"></i>
          <div className="">Home</div>
        </Link>

        <Link href={`/auctions`} className="bottomNavItem">
          <i className="bi bi-hourglass-split"></i>
          <div className="">Auction</div>
        </Link>
        <Link href={`/plans`} className="bottomNavItem">
          <i className="bi bi-app-indicator"></i>
          <div className=" ">Plans</div>
        </Link>
        {user ? (
          <Link href={`/dashboard`} className="bottomNavItem">
            <i className="bi bi-person-fill"></i>
            <div className="">Profile</div>
          </Link>
        ) : (
          <Link href={`/sign-in`} className="bottomNavItem">
            <i className="bi bi-person-fill"></i>
            <div className="">Login</div>
          </Link>
        )}
      </div>
    </div>
  )
}
