import { GetStaticProps, NextPage } from 'next'

import { CodeBlock } from '../../components/Code'
import { Page, PageSubSection } from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const letConstCode = `
let name = 'Alice'
name = 'Bob'
console.log(name) // Bob

const pet = 'Cat'
pet = 'Dog' // Error: Uncaught TypeError: Assignment to constant variable.
console.log(pet) // Cat
`
const JavaScriptPage: NextPage = () => (
  /* TODO: Implement this page */
  <Page slug="javascript">
    <PageSection id="variable" title="Variable">
      <PageSubSection title="let vs const" />
      <CodeBlock language="javascript" code={letConstCode} />
      <CodeBlock language="javascript" code={letConstCode} />
      <CodeBlock language="javascript" code={letConstCode} />
      <CodeBlock language="javascript" code={letConstCode} />
    </PageSection>
    <PageSection id="condition" title="Condition">
      <PageSubSection title="if" />
      <CodeBlock language="javascript" code={letConstCode} />
      <CodeBlock language="javascript" code={letConstCode} />
      <CodeBlock language="javascript" code={letConstCode} />
      <CodeBlock language="javascript" code={letConstCode} />
    </PageSection>
    <PageSection id="loop" title="Loop">
      <PageSubSection title="for" />
      <CodeBlock language="javascript" code={letConstCode} />
      <CodeBlock language="javascript" code={letConstCode} />
      <CodeBlock language="javascript" code={letConstCode} />
      <CodeBlock language="javascript" code={letConstCode} />
    </PageSection>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default JavaScriptPage
