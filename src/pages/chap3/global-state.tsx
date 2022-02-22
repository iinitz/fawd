import Typography from '@mui/material/Typography'
import { NextPage } from 'next'

import { Link } from '../../components/@mui/Link'
import {
  Page, PageReferences, PageReferencesLink, PageSubSection,
} from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const GlobalStatePage: NextPage = () => (
  <Page slug="global-state">
    <PageSection id="redux" title="Redux">
      Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, Vue, Ember, and vanilla JS. Although Redux and React are commonly used together, they are independent of each other
      <ol>
        <li>Create a Redux store</li>
        <li>Subscribe to updates</li>
        <li>
          Inside the subscription callback
          <ul>
            <li>Get the current store state</li>
            <li>Extract the data needed by this piece of UI</li>
            <li>Update the UI with the data</li>
          </ul>
        </li>
        <li>If necessary, render the UI with initial state</li>
        <li>Respond to UI inputs by dispatching Redux actions</li>
      </ol>
    </PageSection>
    <PageSection id="recoil" title="Recoil">
      Recoil lets you create a data-flow graph that flows from atoms (shared state) through selectors (pure functions) and down into your React components. Atoms are units of state that components can subscribe to. Selectors transform this state either synchronously or asynchronously
      <PageSubSection title="Atoms">
        Atoms are units of state. They&apos;re updatable and subscribable: when an atom is updated, each subscribed component is re-rendered with the new value. They can be created at runtime, too. Atoms can be used in place of React local component state. If the same atom is used from multiple components, all those components share their state
      </PageSubSection>
      <PageSubSection title="Selectors">
        <Typography gutterBottom>
          A selector is a pure function that accepts atoms or other selectors as input. When these upstream atoms or selectors are updated, the selector function will be re-evaluated. Components can subscribe to selectors just like atoms, and will then be re-rendered when the selectors change
        </Typography>
        <Typography gutterBottom>
          Selectors are used to calculate derived data that is based on state. This lets us avoid redundant state because a minimal set of state is stored in atoms, while everything else is efficiently computed as a function of that minimal state. Since selectors keep track of what components need them and what state they depend on, they make this functional approach very efficient
        </Typography>
      </PageSubSection>
    </PageSection>
    <PageSection id="read-more" title="Read more">
      <ul>
        <li><Link href="https://dev.to/workshub/state-management-battle-in-react-2021-hooks-redux-and-recoil-2am0#:~:text=State%20management%20is%20simply%20a,class%2C%20can%20have%20a%20state." variant="subtitle1">DEV.to: State Management Battle in React 2021: Hooks, Redux, and Recoil</Link></li>
      </ul>
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://react-redux.js.org/" title="React Redux" />
      <PageReferencesLink href="https://recoiljs.org/" title="Recoil" />
    </PageReferences>
  </Page>
)

export default GlobalStatePage
