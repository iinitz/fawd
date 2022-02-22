import { Typography } from '@mui/material'
import { NextPage } from 'next'

import { Code, CodeBlock } from '../../components/Code'
import { Text } from '../../components/Highlight'
import {
  Page, PageReferences, PageReferencesLink, PageSubSection,
} from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const installCode = `
yarn add react-router-dom
# or
npm install --save react-router-dom
`
const routerCode = `
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <h1>Hello React Router</h1>
)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
`
const routeCode = `
import { Switch, Route } from 'react-router-dom'

const App = () => (
  <div>
    <Switch>
      {/* If the current URL is /about, this route is rendered while the rest are ignored */}
      <Route path="/about">
        <About />
      </Route>

      {/* Note how these two routes are ordered. The more specific path="/contact/:id" comes before path="/contact" so that route will render when viewing an individual contact */}
      <Route path="/contact/:id">
        <Contact />
      </Route>
      <Route path="/contact">
        <AllContacts />
      </Route>

      {/* If none of the previous routes render anything, this route acts as a fallback.
        Important: A route with path="/" will *always* match the URL because all URLs begin with a /. So that's why we put this one last of all */}
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
)
`
const navigationCode = `
<Link to="/">Home</Link>
// <a href="/">Home</a>

<NavLink to="/react" activeClassName="hurray">
  React
</NavLink>
// When the URL is /react, this renders:
// <a href="/react" className="hurray">React</a>
// When it's something else:
// <a href="/react">React</a>

<Redirect to="/login" />
`
const ReactRouterPage: NextPage = () => (
  <Page slug="react-router">
    <PageSection id="react-router-dom" title="react-router-dom">
      <PageSubSection title="Installation">
        <CodeBlock language="bash" code={installCode} />
      </PageSubSection>
      <PageSubSection title="Primary components">
        There are three primary categories of components in React Router
        <ol>
          <li>
            Routers, like <Code>&lt;BrowserRouter&gt;</Code> and <Code>&lt;HashRouter&gt;</Code>
          </li>
          <li>
            Route matchers, like <Code>&lt;Route&gt;</Code> and <Code>&lt;Switch&gt;</Code>
          </li>
          <li>
            Navigation, like <Code>&lt;Link&gt;</Code>, <Code>&lt;NavLink&gt;</Code>, and <Code>&lt;Redirect&gt;</Code>
          </li>
        </ol>
      </PageSubSection>
    </PageSection>
    <PageSection id="router" title="Router">
      At the core of every React Router application should be a router component
      <PageSubSection title="BrowserRouter">
        A <Code>&lt;BrowserRouter&gt;</Code> uses regular URL paths. These are generally the best-looking URLs, but they require your server to be configured correctly. Specifically, your web server needs to serve the same page at all URLs that are managed client-side by React Router
      </PageSubSection>
      <PageSubSection title="HashRouter">
        A <Code>&lt;HashRouter&gt;</Code> stores the current location in the hash portion of the URL, so the URL looks something like http://example.com/#/your/page. Since the hash is never sent to the server, this means that no special server configuration is needed
      </PageSubSection>
      <CodeBlock language="jsx" code={routerCode} />
    </PageSection>
    <PageSection id="route-matchers" title="Route matchers">
      <Typography gutterBottom>
        There are two route matching components: Switch and Route. When a <Code>&lt;Switch&gt;</Code> is rendered, it searches through its children <Code>&lt;Route&gt;</Code> elements to find one whose path matches the current URL. When it finds one, it renders that <Code>&lt;Route&gt;</Code> and ignores all others. This means that you should put <Code>&lt;Route&gt;</Code>s with more specific (typically longer) paths <Text>before</Text> less-specific ones
      </Typography>
      If no <Code>&lt;Route&gt;</Code> matches, the <Code>&lt;Switch&gt;</Code> renders nothing (null)
      <CodeBlock language="jsx" code={routeCode} />
    </PageSection>
    <PageSection id="navigation" title="Navigation">
      <PageSubSection title="Link">
        React Router provides a <Code>&lt;Link&gt;</Code> component to create links in your application. Wherever you render a <Code>&lt;Link&gt;</Code>, an anchor (<Code>&lt;a&gt;</Code>) will be rendered in your HTML document
      </PageSubSection>
      <PageSubSection title="NavLink">
        The <Code>&lt;NavLink&gt;</Code> is a special type of <Code>&lt;Link&gt;</Code> that can style itself as &quot;active&quot; when its to prop matches the current location
      </PageSubSection>
      <PageSubSection title="Redirect">
        Any time that you want to force navigation, you can render a <Code>&lt;Redirect&gt;</Code>. When a <Code>&lt;Redirect&gt;</Code> renders, it will navigate using its to prop
      </PageSubSection>
      <CodeBlock language="jsx" code={navigationCode} />
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://v5.reactrouter.com/web/guides/quick-start" title="React Router: Quick Start" />
    </PageReferences>
  </Page>
)

export default ReactRouterPage
