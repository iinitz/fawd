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
      <PageSubSection title="Exam detail">
        <Alert severity="info" sx={{ border: (theme: Theme) => `1px solid ${theme.palette.info.main}`, my: 2, '& > *': { alignItems: 'center' } }}>
          <AlertTitle sx={{ m: 0 }}>
            You can open any book or search from the internet for this exam
          </AlertTitle>
        </Alert>
        Implement front-end and back-end from requirements and resources
        <ul>
          <li>Implement front-end (React) base on wireframe</li>
          <li>Implement back-end (GraphQL) from Mongoose schema</li>
          <li>Connect front-end and back-end</li>
        </ul>
      </PageSubSection>
      <PageSubSection title="Instructions">
        <ul>
          <li>Clone exam repo to your computer (link available at exam time)</li>
          <li>Implement front-end under folder &quot;web&quot; and front-end should run on Port 3000</li>
          <li>Implement back-end under folder &quot;api&quot; and back-end should run on Port 3001</li>
          <li>Push all exam code to you github repo and create merge request to exam repo (link in bullet one)</li>
          <li>Other details, features and requirements available in README.md in exam repo</li>
        </ul>
      </PageSubSection>
      <PageSubSection title="Score">
        <ul>
          <li>Front-end (30%): Component match with wireframe, correct route/path</li>
          <li>Back-end (30%): GraphQL queries and mutations working correctly</li>
          <li>Features (40%): Connect front-end and back-end, completed requirements and features</li>
        </ul>
      </PageSubSection>
      <PageSubSection title="Exam time">
        19 May 2022 09:30-12:30
      </PageSubSection>
    </PageSection>
  </Page>
)

export default ScorePage
