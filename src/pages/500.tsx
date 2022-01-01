import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'

import { Page } from '../components/Page'

const ServerErrorPage: NextPage = () => (
  <Page title="Error">
    <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center">
      <Typography variant="h3" align="center">Server error</Typography>
    </Box>
  </Page>
)

export default ServerErrorPage
