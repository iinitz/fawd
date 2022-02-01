import Typography from '@mui/material/Typography'
import { GetStaticProps, NextPage } from 'next'

import { Code, CodeBlock } from '../../components/Code'
import { Text } from '../../components/Highlight'
import {
  Page, PageReferences, PageReferencesLink, PageSubSection,
} from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const useEffectCode = `
useEffect(
  () => {
    const subscription = props.source.subscribe()
    return () => {
      subscription.unsubscribe()
    }
  },
  [props.source],
)
`
const useCallbackCode = `
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b)
  },
  [a, b],
)
`
const useMemoCode = `
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b],
)
`
const customHooksCode = `
import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  useEffect(
    () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
    },
    [url],
  )
  return data
}

export default useFetch;
`
const useContextCode = `
const value = useContext(MyContext)
`
const useRefCode = `
const TextInputWithFocusButton = () => {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    // \`current\` points to the mounted text input element
    inputEl.current.focus()
  }
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}
`
const HooksPage: NextPage = () => (
  <Page slug="hooks">
    <PageSection id="rules-of-hooks" title="Rules of Hooks">
      <PageSubSection title="Only Call Hooks at the Top Level">
        <Text>Don&apos;t call Hooks inside loops, conditions, or nested functions</Text>
        <Typography gutterBottom>
          Always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That&apos;s what allows React to correctly preserve the state of Hooks between multiple <Code>useState</Code> and <Code>useEffect</Code> calls
        </Typography>
      </PageSubSection>
      <PageSubSection title="Only Call Hooks from React Functions">
        <Text>Don&apos;t call Hooks from regular JavaScript functions</Text>
        <ul>
          <li>Call Hooks from React function components</li>
          <li>Call Hooks from custom Hooks</li>
        </ul>
      </PageSubSection>
    </PageSection>
    <PageSection id="use-effect" title="useEffect">
      <Typography gutterBottom>The Effect Hook lets you perform side effects in function components</Typography>
      <Code>useEffect</Code> will run after the render is committed to the screen. Think of effects as an escape hatch from React&apos;s purely functional world into the imperative world
      <CodeBlock language="jsx" code={useEffectCode} />
    </PageSection>
    <PageSection id="use-callback" title="useCallback">
      <Code>useCallback</Code> will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders
      <CodeBlock language="jsx" code={useCallbackCode} />
    </PageSection>
    <PageSection id="use-memo" title="useMemo">
      <Code>useMemo</Code> will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render
      <CodeBlock language="jsx" code={useMemoCode} />
    </PageSection>
    <PageSection id="custom-hooks" title="Custom hooks">
      <Text>A custom Hook is a JavaScript function whose name starts with &quot;use&quot; and that may call other Hooks</Text>
      <CodeBlock language="jsx" code={customHooksCode} />
    </PageSection>
    <PageSection id="other-hooks" title="Other hooks">
      <PageSubSection title="useContext">
        A component calling <Code>useContext</Code> will always re-render when the context value changes. If re-rendering the component is expensive, you can optimize it by using memoization
        <CodeBlock language="jsx" code={useContextCode} />
      </PageSubSection>
      <PageSubSection title="useRef">
        <Code>useRef</Code> returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component
        <CodeBlock language="jsx" code={useRefCode} />
      </PageSubSection>
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://reactjs.org/docs/hooks-intro.html" title="React Docs: Introducing Hooks" />
      <PageReferencesLink href="https://reactjs.org/docs/hooks-reference.html" title="React Docs: Hooks API Reference" />
    </PageReferences>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default HooksPage
