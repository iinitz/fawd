import Typography from '@mui/material/Typography'
import { GetStaticProps, NextPage } from 'next'

import { Link } from '../../components/@mui/Link'
import { CodeBlock } from '../../components/Code'
import { Page, PageReferences, PageReferencesLink } from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const useStateCode = `
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
`
const StatePage: NextPage = () => (
  <Page slug="state">
    <PageSection id="component-state" title="Component state?">
      <Typography gutterBottom>Declare a state variable inside your component</Typography>
    </PageSection>
    <PageSection id="use-state" title="useState">
      <CodeBlock language="jsx" code={useStateCode} />
    </PageSection>
    <PageSection id="read-more" title="Read more">
      <ul>
        <li><Link href="https://youtube.com/playlist?list=PLLPNfc7CgMywiG-R6Jix_w8zqF_fxZFxr" variant="subtitle1">Youtube: สอน React - คอร์ส Foundation</Link></li>
      </ul>
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://beta.reactjs.org/reference/usestate" title="React APIs: useState()" />
      <PageReferencesLink href="https://beta.reactjs.org/learn/managing-state" title="React Docs: Managing State" />
    </PageReferences>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default StatePage
