import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
} from 'react'

import { darkTheme, lightTheme } from '../theme'
import { ThemeMode } from '../types'

export declare interface IThemeContext {
  mode: ThemeMode
  currentTheme: ThemeMode
  setMode: React.Dispatch<React.SetStateAction<ThemeMode>>
  switchTheme: () => void
}
export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

export declare interface IThemeProviderProps {
  children: React.ReactNode
}
export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }: IThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(ThemeMode.Dark)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const currentTheme = useMemo(
    () => {
      if (mode === ThemeMode.System) {
        return prefersDarkMode ? ThemeMode.Dark : ThemeMode.Light
      }
      return mode
    },
    [mode, prefersDarkMode],
  )
  const theme = useMemo(
    () => (currentTheme === ThemeMode.Dark ? darkTheme : lightTheme),
    [currentTheme],
  )
  const switchTheme = useCallback(
    () => {
      const nextTheme = currentTheme === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark
      setMode(nextTheme)
      localStorage.setItem('mode', nextTheme)
    },
    [currentTheme],
  )
  useEffect(
    () => {
      setMode((localStorage.getItem('mode') as ThemeMode) ?? ThemeMode.Light)
    },
    [],
  )
  const value = useMemo(
    () => ({
      mode,
      currentTheme,
      setMode,
      switchTheme,
    }),
    [currentTheme, mode, switchTheme],
  )
  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <GlobalStyles styles={{ html: { scrollBehavior: 'smooth' } }} />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
