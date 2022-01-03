import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material/styles'
import { GetStaticProps, NextPage } from 'next'

import { Page, PageSection, PageSubSection } from '../../components/Page'

const ScorePage: NextPage = () => (
  <Page slug="score">
    <Alert severity="info" sx={{ mt: 6, border: (theme: Theme) => `1px solid ${theme.palette.info.main}` }}>
      <AlertTitle>
        <Typography variant="subtitle1">Project group</Typography>
      </AlertTitle>
      <Typography variant="subtitle1">Each group has 4 members</Typography>
    </Alert>
    <PageSection id="midterm-project" title="Midterm project">
      <PageSubSection title="30% - Front-end Headless CMS" />
      <PageSubSection title="Detail">
        Midterm project detail
      </PageSubSection>
    </PageSection>
    <PageSection id="final-project" title="Final project">
      <PageSubSection title="40% - Full-stack" />
      <PageSubSection title="Detail">
        Final project detail
      </PageSubSection>
    </PageSection>
    <PageSection id="final-exam" title="Final exam">
      <PageSubSection title="30% - Exam" />
    </PageSection>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default ScorePage
