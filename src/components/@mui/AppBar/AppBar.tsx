import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'

export const AppBar = styled(MuiAppBar)<MuiAppBarProps>(() => ({
  justifyContent: 'center',
  '& .MuiToolbar-root': {
    justifyContent: 'space-between',
  },
}))
