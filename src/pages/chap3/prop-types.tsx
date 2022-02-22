import { NextPage } from 'next'

import { CodeBlock } from '../../components/Code'
import {
  Page, PageReferences, PageReferencesLink, PageSubSection,
} from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const installCode = `
yarn add prop-types
# or
npm install --save prop-types
`
const propTypesCode = `
import PropTypes from 'prop-types'

const App = (props) => {
  // do something with props
  return (
    <div />
  )
}
App.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these are all optional.
  optionalArray: PropTypes.array,
  optionalBigInt: PropTypes.bigint,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // Anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
  // see https://reactjs.org/docs/rendering-elements.html for more info
  optionalNode: PropTypes.node,

  // A React element (ie. <MyComponent />).
  optionalElement: PropTypes.element,

  // A React element type (eg. MyComponent).
  // a function, string, or "element-like" object (eg. React.Fragment, Suspense, etc.)
  // see https://github.com/facebook/react/blob/HEAD/packages/shared/isValidElementType.js
  optionalElementType: PropTypes.elementType,

  // You can also declare that a prop is an instance of a class. This uses JS's instanceof operator.
  optionalMessage: PropTypes.instanceOf(Message),

  // You can ensure that your prop is limited to specific values by treating it as an enum.
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // An object that could be one of many types
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message),
  ]),

  // An array of a certain type
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // An object with property values of a certain type
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // You can chain any of the above with \`isRequired\` to make sure a warning is shown if the prop isn't provided.

  // An object taking on a particular shape
  optionalObjectWithShape: PropTypes.shape({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired,
  }),

  // An object with warnings on extra properties
  optionalObjectWithStrictShape: PropTypes.exact({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired,
  }),

  requiredFunc: PropTypes.func.isRequired,

  // A value of any data type
  requiredAny: PropTypes.any.isRequired,
}
`
const defaultPropsCode = `
import PropTypes from 'prop-types'

const Profile = ({ name, age }) => (
  <div>
    <h1>{name}</h1>
    <p>{age}</p>
  </div>
)
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
}
Profile.defaultProps = {
  age: 13,
}

const App = () => (
  <>
    <Profile name="Alice" age={25} />
    <Profile name="Bob" />
  </>
)
`
const PropTypesPage: NextPage = () => (
  <Page slug="prop-types">
    <PageSection id="prop-types" title="prop-types">
      Use prop-types to document the intended types of properties passed to components. React will check props passed to your components against those definitions, and warn in development if they don&apos;t match
      <PageSubSection title="Installation">
        <CodeBlock language="bash" code={installCode} />
      </PageSubSection>
      <PageSubSection title="Add component prop types">
        <CodeBlock language="jsx" code={propTypesCode} />
      </PageSubSection>
      <PageSubSection title="Default Props">
        Default value for optional props
        <CodeBlock language="jsx" code={defaultPropsCode} />
      </PageSubSection>
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://www.npmjs.com/package/prop-types" title="NPM: prop-types" />
    </PageReferences>
  </Page>
)

export default PropTypesPage
