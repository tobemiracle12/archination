import { User } from './zustand/User'

export interface Alert {
  title: string
  text: string
  display: boolean
  action: (() => void) | null
  cancel: () => void
  setAlert: (
    title: string,
    text: string,
    display: boolean,
    action?: () => void
  ) => void
  continue: () => void
}

export interface ApiResponse {
  results: unknown[]
  token: string
  message: string
  count: number
  data: ResponseData
  user: User
}

export interface Message {
  message: string | null
  isSuccess: boolean | null
  online: boolean | null
  baseURL: string
  userIp: string
  ip: string
  setMessage: (newMessage: string, isSuccess: boolean) => void
  setOnline: (newMessage: string, isSuccess: boolean) => void
  setBaseUrl: (url: string) => void
  setUserIp: (url: string) => void
  clearMessage: () => void
}

export interface Navigation {
  vNav: boolean
  dashboardNav: boolean
  theme: string
  toggleVNav: () => void
  toggleDashboardNav: () => void
  clearNav: () => void
  clearDashboardNav: () => void
  setThemeContext: (item: string) => void
}

interface ResponseData {
  map(arg0: (item: unknown) => unknown): unknown
  count: number
  user: User
  tokens: unknown
  results: unknown[]
}
