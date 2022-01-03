import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { GetStaticProps, NextPage } from 'next'

import { Page } from '../components/Page'

const IndexPage: NextPage = () => (
  <Page title="Hello, World!">
    <Box display="flex" flexGrow={1} flexDirection="column" justifyContent="center" alignItems="center">
      <Typography variant="h3" align="center" gutterBottom>06016384: SPECIAL TOPICS IN SOFTWARE ENGINEERING 2<br />(Full-stack Web Developer)</Typography>
      <Typography variant="h5" align="center">2564/2, Wed 13:00-16:00</Typography>
      <Divider flexItem sx={{ mx: { xs: '10%', sm: '20%' }, my: 2 }} />
      <Typography variant="h5" align="center">by Saksit Sawang</Typography>
    </Box>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default IndexPage
