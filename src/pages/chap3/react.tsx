import Typography from '@mui/material/Typography'
import { NextPage } from 'next'

import { Code, CodeBlock } from '../../components/Code'
import { Text } from '../../components/Highlight'
import {
  Page, PageReferences, PageReferencesLink, PageSubSection,
} from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const jsxCode = `
const Profile = () => (
  <img
    src="https://i.imgur.com/MK3eW3As.jpg"
    alt="Katherine Johnson"
    className="avatar"
  />
)

const Gallery = () => (
  <section>
    <h1>Amazing scientists</h1>
    <Profile />
    <Profile />
    <Profile />
  </section>
)
`
const propsCode = `
const Profile = ({ name, imageUrl }) => (
  <img
    className="avatar"
    src={imageUrl}
    alt={name}
  />
)

const Gallery = () => (
  <section>
    <h1>Amazing scientists</h1>
    <Profile
      name="Lin Lanying"
      imageUrl="https://i.imgur.com/1bX5QH6.jpg"
    />
    <Profile
      name="Gregorio Y. Zara"
      imageUrl="https://i.imgur.com/7vQD0fPs.jpg"
    />
    <Profile
      name="Hedy Lamarr"
      imageUrl="https://i.imgur.com/yXOvdOSs.jpg"
    />
  </section>
)
`
const fragmentEmptyTagCode = `
const Profile = ({ name, imageUrl }) => (
  <>
    <h3>{name}</h3>
    <img
      className="avatar"
      src={imageUrl}
      alt={name}
    />
  </>
)
`
const fragmentReactCode = `
import { Fragment } from 'react'

const Profile = ({ name, imageUrl }) => (
  <Fragment>
    <h3>{name}</h3>
    <img
      className="avatar"
      src={imageUrl}
      alt={name}
    />
  </Fragment>
)
`
const renderingListsCode = `
const Students = () => (
  <>
    <h3>Students</h3>
    {data.map((student) => (
      <Profile
        key={student.studentId}
        student={student}
      />
    ))}
  </>
)
`
const styleCode = `
<img className="avatar" />

<img style={{ borderRadius: '50%' }} />
`
const ReactPage: NextPage = () => (
  <Page slug="react">
    <PageSection id="what-is-react" title="What is React?">
      <Text>React is a JavaScript library for building user interfaces</Text>
      <Typography gutterBottom>
        React stands at the intersection of design and programming. It lets you take a complex user interface, and break it down into nestable and reusable pieces called &quot;components&quot; that fit well together. If you have a programming background, this might remind you of making a program out of functions. If you&apos;re a designer, this might remind you of composing a design out of layers. If you&apos;re new to both disciplines, that&apos;s okay! Many people get into them with React. Using React might also remind you of building a castle out of toy bricks. Sometimes, it&apos;s even fun
      </Typography>
      <Typography gutterBottom>
        React does not prescribe how you build your entire application. It helps you define and compose components, but stays out of your way in other questions. This means that you will either pick one of the ecosystem solutions for problems like routing, styling, and data fetching, or use a framework that provides great defaults
      </Typography>
    </PageSection>
    <PageSection id="jsx" title="JSX">
      <Typography gutterBottom>
        The markup looks a lot like HTML. This syntax is called JSX, and it is a bit stricter (for example, you have to close all the tags)
      </Typography>
      <Typography gutterBottom>
        Note that the CSS class is specified as <Text>className</Text> in JSX
      </Typography>
      <CodeBlock language="jsx" code={jsxCode} />
    </PageSection>
    <PageSection id="props" title="Props">
      Just like you can pass some information to the browser <Code>&lt;img&gt;</Code> tag, you can also pass information to your own components like <Code>&lt;Profile&gt;</Code>. Such information is called props. Here, three <Code>&lt;Profile&gt;</Code>s receive different props
      <CodeBlock language="jsx" code={propsCode} />
      You might wonder why className=&quot;avatar&quot; uses quotes but src={'{imageUrl}'} uses curly braces. In JSX, curly braces are like a &quot;window into JavaScript&quot;. They let you run a bit of JavaScript right in your markup! So src={'{imageUrl}'} reads the imageUrl prop declared on the first line and passed from the parent Gallery component
    </PageSection>
    <PageSection id="fragment" title="Fragment">
      <PageSubSection title="Empty tag fragment">
        <CodeBlock language="jsx" code={fragmentEmptyTagCode} />
      </PageSubSection>
      <PageSubSection title="Fragment component">
        <CodeBlock language="jsx" code={fragmentReactCode} />
      </PageSubSection>
    </PageSection>
    <PageSection id="rendering-lists" title="Rendering lists">
      <Typography gutterBottom>
        For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings
      </Typography>
      <Typography gutterBottom>
        Usually, a key should be coming from your data, such as a database ID
      </Typography>
      <Typography gutterBottom>
        React will rely on your keys to understand what happened if you later insert, delete, or reorder the items
      </Typography>
      <CodeBlock language="jsx" code={renderingListsCode} />
    </PageSection>
    <PageSection id="style" title="Style">
      <Typography gutterBottom>
        In React, you specify a CSS class with <Code>className</Code>. It works the same way as HTML <Code>class</Code> attribute
      </Typography>
      <Typography gutterBottom>
        Inline CSS styles in JSX. React does not require you to use inline styles (CSS classes work great for most cases). But when you need an inline style, you pass an object to the <Code>style</Code> attribute
      </Typography>
      <CodeBlock language="jsx" code={styleCode} />
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://beta.reactjs.org/learn" title="React Docs: Quick Start" />
      <PageReferencesLink href="https://beta.reactjs.org/learn/describing-the-ui" title="React Docs: Describing the UI" />
    </PageReferences>
  </Page>
)

export default ReactPage
