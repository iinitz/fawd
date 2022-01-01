import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { GetStaticProps, NextPage } from 'next'

import { Page } from '../components/Page'

const IndexPage: NextPage = () => (
  <Page title="Hello, World!">
    <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center">
      <Typography variant="h3" align="center">06016384: SPECIAL TOPICS IN SOFTWARE ENGINEERING 2<br />(Full-stack Web Developer)</Typography>
    </Box>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default IndexPage
