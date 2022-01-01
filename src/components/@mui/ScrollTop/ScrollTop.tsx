import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom'
import { Theme } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { useCallback } from 'react'

export declare interface IScrollTopProps {
  window?: () => Window
}
const defaultProps = {
  window: undefined,
}
export const ScrollTop: React.FC<IScrollTopProps> = ({ window }: IScrollTopProps) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const anchor = (
        (event.target as HTMLDivElement).ownerDocument || document
      ).querySelector('#top')
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    },
    [],
  )
  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: (theme: Theme) => theme.spacing(2),
          right: (theme: Theme) => theme.spacing(2),
          zIndex: 9999,
        }}
      >
        <Fab
          aria-label="scroll back to top"
          size="small"
          sx={{
            '&, &:hover': {
              bgcolor: (theme: Theme) => theme.palette.primary.dark,
              color: '#fff',
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  )
}
ScrollTop.defaultProps = defaultProps
