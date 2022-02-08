import { styled, Theme } from '@mui/material/styles'

export const Text = styled('span')(({ theme }: { theme: Theme }) => ({
  color: theme.palette.secondary.main,
  verticalAlign: 'text-top',
  fontWeight: 'bold',
}))
