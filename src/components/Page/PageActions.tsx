import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'

import { pages, slugs } from '../../contents'

export interface IPageActionsProps {
  index: number
}
export const PageActions: React.FC<IPageActionsProps> = ({ index }: IPageActionsProps) => {
  const router = useRouter()
  const back = useMemo(
    () => {
      const slug = slugs[index - 1]
      return {
        ...pages[slug],
        slug,
      }
    },
    [index],
  )
  const next = useMemo(
    () => {
      const slug = slugs[index + 1]
      return {
        ...pages[slug],
        slug,
      }
    },
    [index],
  )
  const handleRedirect = useCallback(
    (url: string) => async () => {
      await router.push(url)
    },
    [router],
  )
  return (
    <Box sx={{ mt: 6 }}>
      <Divider sx={{ mb: 2 }} />
      <Box display="flex" sx={{ pb: 4 }}>
        {back.slug ? (
          <Button
            variant="outlined"
            fullWidth
            onClick={handleRedirect(`/${back.group}/${back.slug}`)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textTransform: 'none',
              maxWidth: { xs: '45%', sm: '35%' },
              alignItems: 'flex-start',
            }}
          >
            <Typography variant="subtitle1" color="white">Back</Typography>
            <Typography variant="subtitle1">&lt;&lt; {back.title}</Typography>
          </Button>
        ) : null}
        <Box flexGrow={1} sx={{ minWidth: { sm: '30%' } }} />
        {next.slug ? (
          <Button
            variant="outlined"
            fullWidth
            onClick={handleRedirect(`/${next.group}/${next.slug}`)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textTransform: 'none',
              maxWidth: { xs: '45%', sm: '35%' },
              alignItems: 'flex-end',
            }}
          >
            <Typography variant="subtitle1" color="white">Next</Typography>
            <Typography variant="subtitle1">{next.title} &gt;&gt;</Typography>
          </Button>
        ) : null}
      </Box>
    </Box>
  )
}
