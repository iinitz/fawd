import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { Theme } from '@mui/material/styles'
import { GetStaticProps, NextPage } from 'next'

import { Page, PageSection, PageSubSection } from '../../components/Page'

const ScorePage: NextPage = () => (
  <Page slug="score">
    <PageSection id="midterm-project" title="Midterm project">
      <PageSubSection title="30% - Front-end Headless CMS">
        <Alert severity="info" sx={{ border: (theme: Theme) => `1px solid ${theme.palette.info.main}`, mt: 2, '& > *': { alignItems: 'center' } }}>
          <AlertTitle sx={{ m: 0 }}>
            Project member: 1 member
          </AlertTitle>
        </Alert>
      </PageSubSection>
      <PageSubSection title="Detail">
        Midterm project detail
      </PageSubSection>
    </PageSection>
    <PageSection id="final-project" title="Final project">
      <PageSubSection title="40% - Full-stack">
        <Alert severity="info" sx={{ border: (theme: Theme) => `1px solid ${theme.palette.info.main}`, mt: 2, '& > *': { alignItems: 'center' } }}>
          <AlertTitle sx={{ m: 0 }}>
            Project members: 4 members
          </AlertTitle>
        </Alert>
      </PageSubSection>
      <PageSubSection title="Detail">
        TBD
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
