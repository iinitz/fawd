import { Scrollspy } from '@makotot/ghostui'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { Fragment, useMemo } from 'react'

import { usePage } from '../../contexts/PageContext'
import { Link } from '../@mui/Link'

export interface IPageContentProps {
  children?: React.ReactNode
}
export const PageContent: React.FC<IPageContentProps> = ({ children }: IPageContentProps) => {
  const { sections } = usePage()
  const sectionRefs = useMemo(
    () => sections.map(({ ref }) => ref),
    [sections],
  )
  return (
    <Fragment>
      <Box id="content" display="flex" flexGrow={1} sx={{ overflowY: 'auto' }}>
        <Container
          id="top"
          maxWidth="md"
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          {children}
        </Container>
      </Box>
      {sections.length > 0 ? (
        <Scrollspy sectionRefs={sectionRefs} rootSelector="#content">
          {({ currentElementIndexInViewport }) => (
            <Box sx={{ overflowY: 'auto' }}>
              <Box
                display={{ xs: 'none', sm: 'flex' }}
                flexDirection="column"
                sx={{ width: '200px', m: 4 }}
              >
                <Typography variant="subtitle1" color="textSecondary">CONTENTS</Typography>
                <Divider sx={{ my: 1 }} />
                {sections.map(({ id, title }, index) => (
                  <Link key={id} href={`#${id}`} variant="subtitle1" color={currentElementIndexInViewport === index ? 'primary' : 'inherit'} replace>{title}</Link>
                ))}
                <Link href="#top" variant="subtitle2" color="textSecondary">back to top</Link>
              </Box>
            </Box>
          )}
        </Scrollspy>
      ) : null}
    </Fragment>
  )
}
