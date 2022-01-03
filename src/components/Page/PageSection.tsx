import LinkIcon from '@mui/icons-material/Link'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { usePage } from '../../contexts/PageContext'

export declare interface IPageSectionProps {
  id: string
  title: string
  children: React.ReactNode
}
export const PageSection: React.FC<IPageSectionProps> = ({ id, title, children }: IPageSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { registerSection, unregisterSection } = usePage()
  const handleRedirect = useCallback(
    async () => {
      await router.replace(`${router.pathname}#${id}`)
    },
    [id, router],
  )
  useEffect(
    () => {
      registerSection({ id, title, ref })
      return () => {
        unregisterSection(id)
      }
    },
    [id, registerSection, title, unregisterSection],
  )
  return (
    <Box id={id} sx={{ pt: 6 }}>
      <Box ref={ref}>
        <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="h4" sx={{ mr: 1 }}>{title}</Typography>
          <CopyToClipboard text={`${process.env.NEXT_PUBLIC_SITE_URL ?? ''}${router.pathname}#${id}`}>
            <IconButton onClick={handleRedirect}>
              <LinkIcon fontSize="small" sx={{ color: (theme: Theme) => theme.palette.text.secondary }} />
            </IconButton>
          </CopyToClipboard>
        </Box>
        {children}
      </Box>
    </Box>
  )
}
