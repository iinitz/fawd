import Typography from '@mui/material/Typography'
import { GetStaticProps, NextPage } from 'next'

import {
  Page, PageImage, PageReferences, PageReferencesLink, PageSection,
} from '../../components/Page'

const CurrentWebTechnologiesPage: NextPage = () => (
  <Page slug="current-web-technologies">
    <PageSection id="web2" title="Web 2.0 (Read-write web)">
      <PageImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Web_2.0_Map.svg/800px-Web_2.0_Map.svg.png" width={800} height={600} />
      <Typography gutterBottom>
        Web 2.0 refers to worldwide websites which highlight user-generated content, usability, and interoperability for end users
      </Typography>
      <Typography gutterBottom>
        Web 2.0 is also called the participative social web
      </Typography>
      <Typography gutterBottom>
        Interaction and collaboration with each other are allowed by Web 2.0 in a social media dialogue as the creator of user-generated content in a virtual community
      </Typography>
      <Typography gutterBottom>
        The web browser technologies are used in Web 2.0 development and it includes AJAX (Asynchronous JavaScript And XML) and JavaScript frameworks
      </Typography>
      <Typography gutterBottom>
        Recently, AJAX and JavaScript frameworks have become a very popular means of creating web 2.0 sites
      </Typography>
    </PageSection>
    <PageSection id="major-features-of-web-2" title="Major features of Web 2.0">
      <ol>
        <li>Free sorting of information, permits users to retrieve and classify the information collectively</li>
        <li>Dynamic content that is responsive to user input</li>
        <li>Information flows between the site owner and site users by means of evaluation &amp; online commenting</li>
        <li>Developed APIs to allow self-usage, such as by a software application</li>
        <li>Web access leads to concern different, from the traditional Internet user base to a wider variety of users</li>
      </ol>
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://en.wikipedia.org/wiki/Web_2.0" title="Wikipedia: Web 2.0" />
      <PageReferencesLink href="https://www.geeksforgeeks.org/web-1-0-web-2-0-and-web-3-0-with-their-difference/" title="Web 1.0, Web 2.0 and Web 3.0 with their difference" />
    </PageReferences>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default CurrentWebTechnologiesPage
