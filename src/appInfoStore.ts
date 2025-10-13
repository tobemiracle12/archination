import { create } from 'zustand'
import { Alert, Message, Navigation } from './interface'

export const MessageStore = create<Message>((set) => ({
  message: null,
  isSuccess: null,
  online: true,
  baseURL: '',
  userIp: '',
  ip: '',
  setMessage: (newMessage, isSuccess) => {
    set(() => ({
      message: newMessage,
      isSuccess,
    }))

    setTimeout(() => {
      set(() => ({
        message: null,
        isSuccess: null,
      }))
    }, 10000)
  },

  setBaseUrl: (url: string) => {
    set(() => ({
      baseURL: url,
    }))
  },

  setUserIp: (ip: string) => {
    set(() => ({
      userIp: ip,
      ip: ip,
    }))
  },

  setOnline: (newMessage, isSuccess) => {
    if (!newMessage) return
    set(() => ({
      message: newMessage,
      isSuccess: isSuccess,
      online: isSuccess,
    }))

    setTimeout(() => {
      set(() => ({
        message: null,
        isSuccess: null,
      }))
    }, 5000)
  },

  clearMessage: () =>
    set(() => ({
      message: null,
      isSuccess: null,
    })),
}))

export const AlartStore = create<Alert>((set) => ({
  title: '',
  text: '',
  display: false,
  action: null,

  cancel: () => {
    set(() => ({
      display: false,
      action: null,
    }))
  },
  setAlert: (
    title: string,
    text: string,
    display: boolean,
    action?: () => void
  ) => {
    set(() => ({
      display: display,
      title: title,
      text: text,
      action: action || null, // Store function or null
    }))
  },
  continue: () =>
    set((state) => {
      if (state.action) state.action()
      return { display: false, action: null }
    }),
}))

export const NavStore = create<Navigation>((set) => ({
  vNav: false,
  dashboardNav: false,
  theme: '',
  toggleDashboardNav: () => {
    set((state) => ({
      dashboardNav: !state.dashboardNav,
    }))
  },
  toggleVNav: () => {
    set((state) => ({
      vNav: !state.vNav,
    }))
  },

  clearDashboardNav: () => {
    set(() => ({
      dashboardNav: false,
    }))
  },
  clearNav: () => {
    set(() => ({
      vNav: false,
    }))
  },

  setThemeContext: (item: string) => {
    set(() => ({
      theme: item,
    }))
  },
}))
