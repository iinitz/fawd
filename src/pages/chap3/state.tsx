import Typography from '@mui/material/Typography'
import { GetStaticProps, NextPage } from 'next'

import { Link } from '../../components/@mui/Link'
import { Code, CodeBlock } from '../../components/Code'
import {
  Page, PageReferences, PageReferencesLink, PageSubSection,
} from '../../components/Page'
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
const setStateCode = `
const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  )
}
`
const initialStateCode = `
const [state, setState] = useState(
  () => {
    const initialState = someExpensiveComputation(props)
    return initialState
  }
)
`
const StatePage: NextPage = () => (
  <Page slug="state">
    <PageSection id="use-state" title="useState">
      <Typography gutterBottom>
        Returns a stateful value, and a function to update it.
      </Typography>
      <Typography gutterBottom>
        During the initial render, the returned state (<Code>state</Code>) is the same as the value passed as the first argument (<Code>initialState</Code>).
      </Typography>
      <Typography>
        The <Code>setState</Code> function is used to update the state. It accepts a new state value and enqueues a re-render of the component
      </Typography>
      <CodeBlock language="jsx" code={useStateCode} />
      <PageSubSection title="Functional updates">
        If the new state is computed using the previous state, you can pass a function to <Code>setState</Code>. The function will receive the previous value, and return an updated value. Here&apos;s an example of a counter component that uses both forms of <Code>setState</Code>
        <CodeBlock language="jsx" code={setStateCode} />
      </PageSubSection>
      <PageSubSection title="Lazy initial state">
        The <Code>initialState</Code> argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render
        <CodeBlock language="jsx" code={initialStateCode} />
      </PageSubSection>
    </PageSection>
    <PageSection id="read-more" title="Read more">
      <ul>
        <li><Link href="https://youtube.com/playlist?list=PLLPNfc7CgMywiG-R6Jix_w8zqF_fxZFxr" variant="subtitle1">Youtube: สอน React - คอร์ส Foundation</Link></li>
      </ul>
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://beta.reactjs.org/reference/usestate" title="React APIs: useState()" />
      <PageReferencesLink href="https://beta.reactjs.org/learn/managing-state" title="React Docs: Managing State" />
      <PageReferencesLink href="https://reactjs.org/docs/hooks-reference.html#usestate" title="React Docs: Hooks API Reference" />
    </PageReferences>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default StatePage
