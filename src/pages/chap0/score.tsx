import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { Theme } from '@mui/material/styles'
import { NextPage } from 'next'

import { Link } from '../../components/@mui/Link'
import { Page, PageSection, PageSubSection } from '../../components/Page'

const ScorePage: NextPage = () => (
  <Page slug="score">
    <PageSection id="midterm-project" title="Midterm project (30%)">
      <PageSubSection title="Front-end CMS">
        <Alert severity="info" sx={{ border: (theme: Theme) => `1px solid ${theme.palette.info.main}`, my: 2, '& > *': { alignItems: 'center' } }}>
          <AlertTitle sx={{ m: 0 }}>
            Project member: 1 member
          </AlertTitle>
        </Alert>
        Implement front-end (React or Next.js) for CMS (Content Management System) using content from CMS API
        <ul>
          <li>Home page</li>
          <li>Post content page</li>
          <li>Tag/Category page</li>
          <li>Author page</li>
          <li>View comment/Create comment</li>
        </ul>
      </PageSubSection>
      <PageSubSection title="Deadline">
        <del>27 Feb 2022 23:59:59</del> 15 Mar 2022 23:59:59
      </PageSubSection>
      <PageSubSection title="Project detail">
        <ul>
          <li>CMS API endpoint: <Link href="https://fswd-wp.devnss.com/wp-json/wp/v2">https://fswd-wp.devnss.com/wp-json/wp/v2</Link></li>
          <li>Wordpress API referance: <Link href="https://developer.wordpress.org/rest-api/reference/">https://developer.wordpress.org/rest-api/reference/</Link></li>
        </ul>
      </PageSubSection>
    </PageSection>
    <PageSection id="final-project" title="Final project (40%)">
      <PageSubSection title="Full-stack">
        <Alert severity="info" sx={{ border: (theme: Theme) => `1px solid ${theme.palette.info.main}`, my: 2, '& > *': { alignItems: 'center' } }}>
          <AlertTitle sx={{ m: 0 }}>
            Project members: 4 members
          </AlertTitle>
        </Alert>
        Implement any system support ITKMITL
      </PageSubSection>
      <PageSubSection title="Proposal &amp; Requirements">
        28 Feb 2022 23:59:59
      </PageSubSection>
      <PageSubSection title="Deadline">
        <del>1 May 2022 23:59:59</del> 27 May 2022 23:59:59
      </PageSubSection>
    </PageSection>
    <PageSection id="final-exam" title="Final exam (30%)">
      <PageSubSection title="Exam topics">
        TBD
      </PageSubSection>
    </PageSection>
  </Page>
)

export default ScorePage
