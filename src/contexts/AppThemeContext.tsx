import React, { createContext, useEffect, useState, useCallback } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { theme } from 'styles/themes/default'
import { dark } from 'styles/themes/dark'

export type AppThemeProviderProps = {
  children: React.ReactNode
}

export type AppThemeContextValues = {
  theme: DefaultTheme
  setTheme?: (mode: 'default' | 'dark') => void
}

export const AppThemeContext = createContext<AppThemeContextValues>({
  theme,
})

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [AppTheme, setAppTheme] = useState(theme)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')

    if (!localTheme) return

    if (localTheme === 'default') {
      setAppTheme(theme)
    } else {
      setAppTheme(dark)
    }
  }, [])

  const handleSetTheme: AppThemeContextValues['setTheme'] = useCallback(
    (mode = 'default') => {
      if (mode === 'default') {
        setAppTheme(theme)
        localStorage.setItem('theme', 'default')
      } else {
        setAppTheme(dark)
        localStorage.setItem('theme', 'dark')
      }
    },
    [],
  )

  return (
    <AppThemeContext.Provider
      value={{ theme: AppTheme, setTheme: handleSetTheme }}
    >
      <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  )
}
