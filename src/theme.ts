import {
  amber, deepOrange, green, red, teal,
} from '@mui/material/colors'
import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles'
import { mergeDeepRight } from 'ramda'

const baseTheme: ThemeOptions = {
  palette: {
    primary: teal,
    secondary: deepOrange,
    success: green,
    error: red,
    warning: amber,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: '"Prompt",Sarabun,"Helvetica","Arial",sans-serif',
    subtitle1: {
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: '"Sarabun"',
    },
  },
}
export const darkTheme = responsiveFontSizes(createTheme(mergeDeepRight<object, object>(baseTheme, {
  palette: {
    mode: 'dark',
  },
})))
export const lightTheme = responsiveFontSizes(createTheme(mergeDeepRight<object, object>(baseTheme, {
  palette: {
    mode: 'light',
  },
})))
