import { GetStaticProps, NextPage } from 'next'

import { Code } from '../../components/Code'
import { Page, PageHeader, PageSubSection } from '../../components/Page'
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
  <Page index={8}>
    <PageHeader>JavaScript</PageHeader>
    <PageSection id="variable" title="Variable">
      <PageSubSection title="let vs const" />
      <Code language="javascript" code={letConstCode} />
      <Code language="javascript" code={letConstCode} />
      <Code language="javascript" code={letConstCode} />
      <Code language="javascript" code={letConstCode} />
    </PageSection>
    <PageSection id="condition" title="Condition">
      <PageSubSection title="if" />
      <Code language="javascript" code={letConstCode} />
      <Code language="javascript" code={letConstCode} />
      <Code language="javascript" code={letConstCode} />
      <Code language="javascript" code={letConstCode} />
    </PageSection>
    <PageSection id="loop" title="Loop">
      <PageSubSection title="for" />
      <Code language="javascript" code={letConstCode} />
      <Code language="javascript" code={letConstCode} />
      <Code language="javascript" code={letConstCode} />
      <Code language="javascript" code={letConstCode} />
    </PageSection>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default JavaScriptPage
