import { styled, Theme } from '@mui/material/styles'

export const Code = styled((props) => <code {...props} />)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 4,
  backgroundColor: theme.palette.divider,
  padding: theme.spacing(0, 1),
}))
