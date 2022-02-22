import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { NextPage } from 'next'

import {
  BasicInfo, Contact, Education, Experience, Skill,
} from '../components/About'
import { Page } from '../components/Page'

const AboutPage: NextPage = () => (
  <Page title="About">
    <Grid container spacing={2} sx={{ py: 4 }}>
      <Grid item xs={12} md={4}>
        <Box sx={{ mb: 2 }}>
          <BasicInfo />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Contact />
        </Box>
        <Box>
          <Skill />
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box sx={{ mb: 2 }}>
          <Education />
        </Box>
        <Box>
          <Experience />
        </Box>
      </Grid>
    </Grid>
  </Page>
)

export default AboutPage
