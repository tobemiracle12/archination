'use client'
import { NavStore } from '@/src/appInfoStore'
import { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const { setThemeContext } = NavStore()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      setThemeContext(savedTheme)
      document.documentElement.classList.add(savedTheme)
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      const defaultTheme = prefersDark ? 'dark' : 'light'
      setTheme(defaultTheme)
      setThemeContext(defaultTheme)
      document.documentElement.classList.add(defaultTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme)

      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(newTheme)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
