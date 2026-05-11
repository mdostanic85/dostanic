'use client'

import { useState, useEffect, useCallback } from 'react'

type Theme = 'dark' | 'light'

export function useTheme() {
  // Default dark — matches what the server renders (no data-theme attribute = dark)
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    // Sync with what the anti-FOCT script may have already applied
    const applied = document.documentElement.getAttribute('data-theme')
    if (applied === 'light') setTheme('light')
  }, [])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      if (next === 'light') {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
      } else {
        document.documentElement.removeAttribute('data-theme')
        localStorage.removeItem('theme')
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
