'use client'
import { MessageStore } from '@/src/zustand/Message'
import { motion, AnimatePresence } from 'framer-motion'

export default function UserResponse() {
  const { clearMessage, message, isSuccess } = MessageStore()

  return (
    <AnimatePresence>
      {message !== null && (
        <div
          className={`h-full w-full fixed bg-black/50 z-50 flex justify-center items-start py-10`}
          onClick={clearMessage}
        >
          <div className="bg-white max-w-[500px] px-2 w-full flex flex-col items-center border border-[var(--border-color)] text-lg rounded-md py-5">
            {isSuccess ? (
              <i className="bi bi-shield-check text-4xl text-green-500"></i>
            ) : (
              <i className="bi bi-exclamation-octagon text-4xl text-red-600"></i>
            )}
            <p
              className={`mt-3 text-center ${
                isSuccess ? 'text-green-500' : 'text-red-600'
              }`}
            >
              {message}
            </p>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
