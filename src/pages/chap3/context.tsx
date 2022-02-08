import Typography from '@mui/material/Typography'
import { GetStaticProps, NextPage } from 'next'

import { Code, CodeBlock } from '../../components/Code'
import { Text } from '../../components/Highlight'
import { Page, PageReferences, PageReferencesLink } from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const createContextCode = `
import { useContext } from 'react'

const const MyContext = createContext(defaultValue)
`
const contextProviderCode = `
<MyContext.Provider value={/* some value */}>
`
const contextConsumerCode = `
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
`
const useContextCode = `
import { useContext } from 'react'

const App = () => {
  const value = useContext(MyContext)
  return (
    <div>{value}</div>
  )
}
`
const ContextPage: NextPage = () => (
  <Page slug="context">
    <PageSection id="what-is-context" title="What is context ?">
      <Text>Context provides a way to pass data through the component tree without having to pass props down manually at every level</Text>
      <Typography>
        In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application
      </Typography>
    </PageSection>
    <PageSection id="create-context" title="createContext">
      <CodeBlock language="jsx" code={createContextCode} />
      <Typography gutterBottom>
        Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching <Code>Provider</Code> above it in the tree
      </Typography>
      <Typography>
        The <Code>defaultValue</Code> argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them. Note: passing <Code>undefined</Code> as a Provider value does not cause consuming components to use <Code>defaultValue</Code>
      </Typography>
    </PageSection>
    <PageSection id="context-provider" title="Context.Provider">
      <CodeBlock language="jsx" code={contextProviderCode} />
      The Provider component accepts a <Code>value</Code> prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree
    </PageSection>
    <PageSection id="context-consumer" title="Context.Consumer">
      <CodeBlock language="jsx" code={contextConsumerCode} />
      A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component
    </PageSection>
    <PageSection id="use-context" title="useContext">
      <CodeBlock language="jsx" code={useContextCode} />
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://reactjs.org/docs/context.html" title="React Docs: Context" />
    </PageReferences>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default ContextPage
