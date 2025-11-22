import axios from 'axios'
import * as UAParser from 'ua-parser-js'

export const getLocation = (): Promise<{ lat: number; lng: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser.'))
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      },
      (error) => {
        reject(error)
      }
    )
  })
}

export const getUserDeviceInfo = () => {
  const parser = new UAParser.UAParser()
  const result = parser.getResult()

  return {
    device: result.device.model || 'Unknown Device',
    os: result.os.name || 'Unknown OS',
    osVersion: result.os.version || '',
    browser: result.browser.name || 'Unknown Browser',
    browserVersion: result.browser.version || '',
  }
}

export const addQuery = (
  input: string,
  startWith: string,
  replacement: string
) => {
  if (!input) {
    return replacement
  }
  if (!input.includes(startWith)) {
    return `${input}${replacement}`
  }
  const regex = new RegExp(`${startWith}[^&]*&`, 'g')
  return input.replace(regex, replacement)
}

export const appendForm = (inputs: Input[]): FormData => {
  const data = new FormData()

  inputs.forEach((el) => {
    if (el.value !== null && el.value !== undefined) {
      if (el.value instanceof File) {
        // Append file object directly
        data.append(el.name, el.value)
      } else {
        // Convert other types to string and append
        data.append(el.name, String(el.value))
      }
    }
  })

  return data
}

export const calculateRemainingTime = (endTime: Date): CountdownState => {
  const formatTime = (time: number): string => time.toString().padStart(2, '0')
  const now = new Date()
  const timeDifference = endTime.getTime() - now.getTime()

  if (timeDifference <= 0) {
    return { countdown: 'Expired', isExpired: true }
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60)
  const seconds = Math.floor((timeDifference / 1000) % 60)

  // Include all units, with leading zeros
  const countdown = `${formatTime(days * 24 + hours)}:${formatTime(
    minutes
  )}:${formatTime(seconds)}`

  return {
    countdown,
    isExpired: false,
  }
}

export const cleanQuery = (queryString: string): string => {
  return queryString.endsWith('&') ? queryString.slice(0, -1) : queryString
}

export const formatCount = (num: number): string => {
  if (!num) {
    return '0'
  }
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B'
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M'
  if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K'
  return num.toString()
}

export const formatMoney = (value: number | string): string => {
  if (value === null || value === undefined || value === '') return '0'
  const num = Number(value)
  if (isNaN(num)) return '0'

  return num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export const formatDate = (dateInput: Date | string): string => {
  const date = new Date(dateInput)

  // Months array
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  // Get the day, month, and year
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  // Determine the day suffix
  const getDaySuffix = (day: number): string => {
    if (day % 10 === 1 && day !== 11) return 'st'
    if (day % 10 === 2 && day !== 12) return 'nd'
    if (day % 10 === 3 && day !== 13) return 'rd'
    return 'th'
  }

  // Format the date
  return `${month} ${day}${getDaySuffix(day)}, ${year}`
}

export const formatDateToDDMMYY = (
  dateInput: Date | null | number | string
): string => {
  if (dateInput) {
    const date = new Date(dateInput)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear()).slice(-2)
    return `${day}/${month}/${year}`
  } else {
    return `Incorrect Date`
  }
}

export const formatRelativeDate = (dateInput: Date | string): string => {
  const now = new Date()
  const date = new Date(dateInput)

  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 0) {
    return 'now'
  }

  const minute = 60
  const hour = 3600
  const day = 86400
  const week = 604800

  if (diffInSeconds < minute) {
    return 'now'
  } else if (diffInSeconds < hour) {
    const minutes = Math.floor(diffInSeconds / minute)
    return minutes === 1 ? `${minutes} min` : `${minutes} mins`
  } else if (diffInSeconds < day) {
    const hours = Math.floor(diffInSeconds / hour)
    return hours === 1 ? `${hours} hr` : `${hours} hrs`
  } else if (diffInSeconds < week) {
    const days = Math.floor(diffInSeconds / day)
    return days === 1 ? `${days} day` : `${days} days`
  } else {
    // 7 days or more — return as dd/mm/yy
    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0') // Month is 0-based
    const yy = String(date.getFullYear()).slice(-2)
    return `${dd}/${mm}/${yy}`
  }
}

export const formatTimeTo12Hour = (dateInput: Date | null | number): string => {
  if (dateInput) {
    const date = new Date(dateInput)
    let hours = date.getHours()
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12 || 12
    return `${hours}:${minutes} ${ampm}`
  } else {
    return `Incorrect Date`
  }
}

export const getExtension = (type: string): string => {
  const extension = type.substring(type.lastIndexOf('.')).toLowerCase()

  if (extension.includes('doc')) {
    return '/files/doc.png'
  } else if (extension.includes('csv')) {
    return '/files/csv.png'
  } else if (extension.includes('ppt')) {
    return '/files/ppt.png'
  } else if (extension.includes('xls')) {
    return '/files/xls.png'
  } else if (extension.includes('pdf')) {
    return '/files/pdf.png'
  } else {
    return '/files/file.png'
  }
}

export const getFileType = (file: File): string => {
  const fileName = file.name || ''
  const ext = fileName.includes('.')
    ? fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase()
    : ''

  const mimeTypes: { [key: string]: string } = {
    // Images
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
    avif: 'image/avif',
    bmp: 'image/bmp',
    svg: 'image/svg+xml',

    // Videos
    mp4: 'video/mp4',
    webm: 'video/webm',
    ogg: 'video/ogg',
    avi: 'video/x-msvideo',
    mpeg: 'video/mpeg',
    mov: 'video/quicktime',

    // Audio
    mp3: 'audio/mpeg',
    wav: 'audio/wav',
    aac: 'audio/aac',
    oga: 'audio/ogg',

    // Documents
    pdf: 'application/pdf',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ppt: 'application/vnd.ms-powerpoint',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    csv: 'text/csv',
    zip: 'application/zip',
    rar: 'application/vnd.rar',
    txt: 'text/plain',
  }

  return mimeTypes[ext] || file.type || 'application/octet-stream'
}

export const handleFileUpload = async (
  event: React.ChangeEvent<HTMLInputElement>,
  baseURL: string,
  setFiles: React.Dispatch<
    React.SetStateAction<
      {
        type: string
        name: string
        duration: number
        pages: number
        size: number
        source: string
      }[]
    >
  >,
  setPercents: React.Dispatch<React.SetStateAction<number[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  filePages: number,
  duration: number
) => {
  if (event.target.files) {
    const files = event.target.files
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const fileName = files[i].name
      const fileSize = files[i].size
      const type = getFileType(file)

      try {
        setLoading(true)
        const { data } = await axios.post(`${baseURL}s3-presigned-url`, {
          fileName: file.name,
          fileType: file.type,
        })

        const { uploadUrl } = data

        setFiles((prevs) => {
          const updated = [...prevs]
          updated[i] = {
            type,
            name: fileName,
            duration: duration,
            pages: filePages,
            size: fileSize,
            source: '',
          }
          return updated
        })

        await axios.put(uploadUrl, file, {
          headers: { 'Content-Type': file.type },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percent = Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
              )
              setPercents((prev) => {
                const updated = [...prev]
                updated[i] = percent
                return updated
              })
            }
          },
        })

        const cleanUrl = uploadUrl.split('?')[0]

        setFiles((prevs) => {
          const updated = [...prevs]
          updated[i] = {
            type,
            name: fileName,
            size: fileSize,
            duration: duration,
            pages: filePages,
            source: cleanUrl,
          }
          return updated
        })

        setLoading(false)
      } catch (error) {
        console.error('❌ Upload failed:', error)
        setLoading(false)
      }
    }
  }
}

export const handleRemoveFile = async (
  index: number,
  source: string,
  baseURL: string,
  setFiles: React.Dispatch<
    React.SetStateAction<
      {
        type: string
        name: string
        duration: number
        pages: number
        size: number
        source: string
      }[]
    >
  >
) => {
  try {
    const fileKey = source.split('.com/')[1]
    await axios.post(`${baseURL}s3-delete-file`, { fileKey })
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
  } catch (error) {
    console.error('Failed to delete file from S3:', error)
  }
}

export const truncateString = (
  input: string,
  maxLength: number = 50
): string => {
  if (input.length > maxLength) {
    return input.slice(0, maxLength) + '...'
  }
  return input
}

export const truncateStringNormal = (
  input: string,
  maxLength: number
): string => {
  if (input.length > maxLength) {
    return input.substring(0, maxLength)
  }
  return input
}

interface Input {
  name: string
  value: string | number | boolean | File | null
}

type CountdownState = {
  countdown: string
  isExpired: boolean
}

export const validateUsername = (username: string) => {
  const regex = /^[\w!@#$%^&*()_+={}\[\]:;"'<>,.?/|\\~`]{2,}$/
  if (regex.test(username)) {
    return { valid: true, message: 'Valid username' }
  } else {
    return {
      valid: false,
      message:
        'Invalid username. It should contain at least 2 alphanumeric characters, underscore or special symbols without spaces or hyphens.',
    }
  }
}
