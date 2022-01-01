import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'

import { Page } from '../components/Page'

const NotFoundPage: NextPage = () => (
  <Page title="Not found">
    <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center">
      <Typography variant="h3" align="center">Page not found</Typography>
    </Box>
  </Page>
)

export default NotFoundPage
