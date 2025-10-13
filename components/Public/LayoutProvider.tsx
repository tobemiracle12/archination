'use client'

import { useEffect } from 'react'
import { MessageStore } from '@/src/appInfoStore'

const LayoutProvider = () => {
  const { setBaseUrl } = MessageStore()

  useEffect(() => {
    const url =
      process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_PROD_API_URL
        : process.env.NEXT_PUBLIC_DEV_API_URL
    setBaseUrl(String(url))
  }, [])

  return null
}

export default LayoutProvider
