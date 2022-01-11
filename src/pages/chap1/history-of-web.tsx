import Typography from '@mui/material/Typography'
import { GetStaticProps, NextPage } from 'next'

import { Text } from '../../components/Highlight'
import {
  Page, PageImage, PageQuestion, PageReferences, PageReferencesLink, PageSection, PageSubSection,
} from '../../components/Page'

const HistoryOfWebPage: NextPage = () => (
  <Page slug="history-of-web">
    <PageSection id="web1.0" title="Web 1.0 (Read-only web)">
      <Typography gutterBottom>
        The generic term &quot;web&quot; has been widely used for 32 years, yet few know its definition or origin
      </Typography>
      <Typography gutterBottom>
        In 1989, English scientist Tim Berners-Lee shared his vision for a &quot;collaborative medium&quot; for researchers to share and update scientific research and information at CERN (European Institute for Particle Physics)
      </Typography>
      <Typography gutterBottom>
        Four years later he created the World Wide Web in 1993 — kicking off a revolutionary internet era
      </Typography>
    </PageSection>
    <PageSection id="fundamental-technologies" title="Fundamental technologies">
      Sir Tim Berners-Lee had written the three fundamental technologies that remain the foundation of today&apos;s web
      <PageImage src="https://www.w3.org/2001/tag/2003/webarch-20031203/uri-res-rep.png" width={515} height={484} />
      <PageSubSection title="HTML: HyperText Markup Language">
        The markup (formatting) language for the web
      </PageSubSection>
      <PageSubSection title="URI: Uniform Resource Identifier">
        <Typography gutterBottom>
          A kind of &quot;address&quot; that is unique and used to identify to each resource on the web
        </Typography>
        <Text>It is also commonly called a URL</Text>
      </PageSubSection>
      <PageSubSection title="HTTP: Hypertext Transfer Protocol">
        Allows for the retrieval of linked resources from across the web
      </PageSubSection>
    </PageSection>
    <PageSection id="design-essentials-of-a-web-1" title="Design essentials of a Web 1.0">
      <ol>
        <li>Static pages</li>
        <li>Content is served from the server&apos;s file system</li>
        <li>Pages built using Server Side Includes or Common Gateway Interface (CGI)</li>
        <li>Frames and Tables are used to position and align the elements on a page</li>
      </ol>
    </PageSection>
    <PageSection id="dyk" title="Did you know ?">
      <PageQuestion question="The first web browser name is ?" answer="WorldWideWeb">
        The first web browser (or browser-editor) was written in 1990 by Tim Berners-Lee
        <PageImage src="https://www.w3.org/History/1994/WWW/Journals/CACM/screensnap2_24c.gif" width={1120} height={832} />
      </PageQuestion>
      <PageQuestion question="The first web server name is ?" answer="httpd">
        The first web server was written in 1990 by Tim Berners-Lee
      </PageQuestion>
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://webfoundation.org/about/vision/history-of-the-web/" title="History of the Web" />
      <PageReferencesLink href="https://www.w3.org/2001/tag/2003/webarch-20031203/diff-20031203.html" title="Architecture of the World Wide Web 1.0" />
      <PageReferencesLink href="https://www.w3.org/People/Berners-Lee/WorldWideWeb.html" title="The WorldWideWeb browser" />
      <PageReferencesLink href="https://www.geeksforgeeks.org/web-1-0-web-2-0-and-web-3-0-with-their-difference/" title="Web 1.0, Web 2.0 and Web 3.0 with their difference" />
    </PageReferences>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default HistoryOfWebPage
