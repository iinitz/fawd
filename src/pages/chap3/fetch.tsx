import Typography from '@mui/material/Typography'
import { GetStaticProps, NextPage } from 'next'

import { Link } from '../../components/@mui/Link'
import { Code, CodeBlock } from '../../components/Code'
import { Page, PageReferences, PageReferencesLink } from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const fetchCode = `
const App = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(
    () => {
      setLoading(true)
      fetch('https://api.github.com/users/iinitz')
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    },
    [],
  )
  if (loading) {
    return (
      <div>Loading...</div>
    )
  }
  if (error) {
    return (
      <div>Error: {error.message}</div>
    )
  }
  return (
    <div>{data.name}</div>
  )
}
`
const FetchPage: NextPage = () => (
  <Page slug="fetch">
    <PageSection id="fetch" title="fetch()">
      <Typography gutterBottom>
        The global <Code>fetch()</Code> method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available
      </Typography>
      <Typography gutterBottom>
        The promise resolves to the Response object representing the response to your request
      </Typography>
      <Typography>
        A <Code>fetch()</Code> promise only rejects when a network error is encountered (which is usually when there&apos;s a permissions issue or similar). A <Code>fetch()</Code> promise does not reject on HTTP errors (404, etc.). Instead, a <Code>then()</Code> handler must check the Response.ok and/or Response.status properties
      </Typography>
      <CodeBlock language="jsx" code={fetchCode} />
    </PageSection>
    <PageSection id="read-more" title="Read more">
      <ul>
        <li><Link href="https://www.freecodecamp.org/news/fetch-data-react/" variant="subtitle1">How to Fetch Data in React: Cheat Sheet + Examples</Link></li>
      </ul>
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://developer.mozilla.org/en-US/docs/Web/API/fetch" title="React Docs: Context" />
    </PageReferences>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default FetchPage
