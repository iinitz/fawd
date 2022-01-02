import { GetStaticProps, NextPage } from 'next'

import { Link } from '../../components/@mui/Link'
import { Page, PageSubSection } from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const ToolsPage: NextPage = () => (
  <Page slug="tools">
    <PageSection id="browser" title="Browser">
      <PageSubSection title="Chrome">
        <Link href="https://www.google.com/chrome/" color="primary" target="_blank">Download</Link>
      </PageSubSection>
      <PageSubSection title="React Developer Tools (Chrome extension)">
        <Link href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en-US" color="primary" target="_blank">Download</Link>
      </PageSubSection>
    </PageSection>
    <PageSection id="ide" title="IDE">
      <PageSubSection title="VS Code">
        <Link href="https://code.visualstudio.com/" color="primary" target="_blank">Download</Link>
      </PageSubSection>
      <PageSubSection title="ESLint (VS Code extension)">
        <Link href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" color="primary" target="_blank">Download</Link>
      </PageSubSection>
    </PageSection>
    <PageSection id="nodejs" title="Node.js">
      <PageSubSection title="Using NVM">
        <Link href="https://github.com/coreybutler/nvm-windows" color="primary" target="_blank">Windows (Download)</Link><br />
        <Link href="https://github.com/nvm-sh/nvm" color="primary" target="_blank">macOS &amp; Linux (Install)</Link>
      </PageSubSection>
      <PageSubSection title="Install local">
        <Link href="https://nodejs.org/en/download/current/" color="primary" target="_blank">Download (current version 17.3.0)</Link>
      </PageSubSection>
    </PageSection>
    <PageSection id="package-manager" title="Package manager">
      <PageSubSection title="Yarn 1">
        <Link href="https://classic.yarnpkg.com/en/docs/install" color="primary" target="_blank">Install</Link>
      </PageSubSection>
      <PageSubSection title="NPM">
        Default Node.js package manager
      </PageSubSection>
    </PageSection>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default ToolsPage
