import Typography from '@mui/material/Typography'
import { GetStaticProps, NextPage } from 'next'

import { Link } from '../../components/@mui/Link'
import { Code, CodeBlock } from '../../components/Code'
import { Text } from '../../components/Highlight'
import {
  Page, PageReferences, PageReferencesLink, PageSubSection,
} from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const letConstCode = `
let name = 'Alice'
name = 'Bob'
console.log(name) // Bob

const pet = 'Cat'
pet = 'Dog' // Error: Uncaught TypeError: Assignment to constant variable.
console.log(pet) // Cat
`
const stringTemplateCode = `
const name = 'Alice'

// The old way
console.log('Hello, ' + name + '!') // Hello, Alice!

// Using string template
console.log(\`Hello, \${name}!\`) // Hello, Alice!
`
const arrowFunctionCode = `
// The old way
function sum(a, b) {
  return a + b
}
// Using arrow function
const sum = (a, b) => {
  return a + b
}

// Arrow function return value by default
const isOdd = (number) => number % 2 === 1
`
const asyncAwaitCode = `
const task = (id) => {
  const delay = parseInt(Math.random() * 1000)
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve(\`task \${id}: \${delay}ms\`)
      },
      delay,
    )
  })
}
const main = async () => {
  console.log(await task(1))
  console.log(await task(2))
  console.log(await task(3))
  console.log(await task(4))
  console.log(await task(5))
}
main()
// task 1: 675ms
// task 2: 128ms
// task 3: 592ms
// task 4: 318ms
// task 5: 767ms
`
const restAndSpreadCode = `
// Rest elements for array destructuring assignment
const primes = [2, 3, 5, 7, 11]
const [first, second, ...rest] = primes
console.log(first) // 2
console.log(second) // 3
console.log(rest) // [5, 7, 11]

// Spread elements for array literals
const primesCopy = [first, second, ...rest]
console.log(primesCopy) // [2, 3, 5, 7, 11]

// Rest properties for object destructuring assignment
const person = {
  firstName: 'Sebastian',
  lastName: 'Markbåge',
  country: 'USA',
  state: 'CA',
}
const { firstName, lastName, ...rest } = person
console.log(firstName) // Sebastian
console.log(lastName) // Markbåge
console.log(rest) // { country: 'USA', state: 'CA' }

// Spread properties for object literals
const personCopy = { firstName, lastName, ...rest }
console.log(personCopy)
// { firstName: 'Sebastian', lastName: 'Markbåge', country: 'USA', state: 'CA' }

// Shallow-clone an object
const data = { x: 42, y: 27, label: 'Treasure' }
// The old way
const clone1 = Object.assign({}, data)
// The new way
const clone2 = { ...data }
// Either results in
// { x: 42, y: 27, label: 'Treasure' }

// Merge two objects
const defaultSettings = { logWarnings: false, logErrors: false }
const userSettings = { logErrors: true }
// The old way
const settings1 = Object.assign({}, defaultSettings, userSettings)
// The new way
const settings2 = { ...defaultSettings, ...userSettings }
// Either results in
// { logWarnings: false, logErrors: true }
`
const bigIntCode = `
const max = Number.MAX_SAFE_INTEGER // 9_007_199_254_740_991

console.log(max + 1) // 9_007_199_254_740_992
console.log(max + 2) // 9_007_199_254_740_992

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2n) // 9_007_199_254_740_993n

console.log(1 + 1n) // Error: Uncaught TypeError: Cannot mix BigInt and other types
`
const nullishCoalescingCode = `
false ?? true // false
0 ?? 1 // 0
'' ?? 'default' // ''

null ?? [] // []
undefined ?? [] // []
`
const optionalChainingCode = `
const customer = {
  name: 'Alice',
}

console.log(customer.address.zipcode) // Error: Uncaught TypeError: Cannot read properties of undefined (reading 'zipcode')
console.log(customer?.address?.zipcode) // undefined
`
const numericSeparatorsCode = `
const number = 1_019_436_871.42

console.log(number) // 1019436871.42
`
const JavaScriptPage: NextPage = () => (
  <Page slug="javascript">
    <PageSection id="why-javascript" title="Why JavaScript ?">
      <PageSubSection title="Browser support">
        All popular modern Web browser support JavaScript with build-in interpreters
      </PageSubSection>
      <PageSubSection title="Server side scripting">
        Node.js is an JavaScript run-time environment that executes JavaScript code outside of a browser
      </PageSubSection>
      <PageSubSection title="Imperative and structured">
        Support much of the structured programming syntax from C
      </PageSubSection>
      <PageSubSection title="Semicolon (;)">
        Automatic semicolon insertion
      </PageSubSection>
      <PageSubSection title="Dynamic typing">
        Dynamically typed like most other scripting languages
      </PageSubSection>
      <PageSubSection title="First-class functions">
        Passing function as arguments, returning as the values and assigning to variables or storing in data structures
      </PageSubSection>
      <PageSubSection title="Non blocking I/O (Asynchronous)">
        JavaScript is single threaded which means only one statement is executed at a time, that uses something called <Link href="http://latentflip.com/loupe" target="_blank"><Text>Eventloop</Text></Link> for Asynchronous calls
      </PageSubSection>
      <PageSubSection title="Object-oriented programming">
        Prototype-based object-oriented and class syntax
      </PageSubSection>
    </PageSection>
    <PageSection id="es-syntax" title="ES Syntax">
      <Typography gutterBottom>
        ECMA Script (or ES) is a JavaScript standard meant to ensure the interoperability of web pages across different web browsers
      </Typography>
      <Typography gutterBottom>
        It is standardised by Ecma International according to the document ECMA-262
      </Typography>
      <Typography gutterBottom>
        ECMAScript is commonly used for client-side scripting on the World Wide Web, and it is increasingly being used for writing server applications and services using Node.js
      </Typography>
      <PageSubSection title="let and const">
        <Code>const</Code> behave like <Code>let</Code> variables, except they cannot be <Text>reassigned</Text>
        <CodeBlock language="javascript" code={letConstCode} />
      </PageSubSection>
      <PageSubSection title="String template">
        The string interpolation in JavaScript is performed by template literals (strings wrapped in backticks <Code>`</Code>) and <Code>${'{'}expression{'}'}</Code> as a placeholder
        <CodeBlock language="javascript" code={stringTemplateCode} />
      </PageSubSection>
      <PageSubSection title="Arrow function">
        Arrow functions allow us to write shorter function syntax
        <CodeBlock language="javascript" code={arrowFunctionCode} />
      </PageSubSection>
      <PageSubSection title="async/await">
        <Typography gutterBottom>
          async and await make promises easier to write
        </Typography>
        <Typography gutterBottom>
          <Code>async</Code> makes a function return a Promise
        </Typography>
        <Typography gutterBottom>
          <Code>await</Code> makes a function wait for a Promise
        </Typography>
        <CodeBlock language="javascript" code={asyncAwaitCode} />
      </PageSubSection>
      <PageSubSection title="Rest and Spread">
        <Typography gutterBottom>
          The rest operator (...) in object destructuring. At the moment, this operator only works for Array destructuring and in parameter definitions
        </Typography>
        <Typography gutterBottom>
          The spread operator (...) in object literals. At the moment, this operator only works in Array literals and in function and method calls
        </Typography>
        <CodeBlock language="javascript" code={restAndSpreadCode} />
      </PageSubSection>
      <PageSubSection title="BigInt">
        <Typography gutterBottom>
          BigInts are a new numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers
        </Typography>
        <Typography gutterBottom>
          To create a BigInt, add the <Code>n</Code> suffix to any integer literal. For example, <Code>123</Code> becomes <Code>123n</Code>. The global BigInt(number) function can be used to convert a Number into a BigInt. In other words, <Code>BigInt(123) === 123n</Code>. Let&apos;s use these two techniques to solve the problem we were having earlier
        </Typography>
        <CodeBlock language="javascript" code={bigIntCode} />
      </PageSubSection>
      <PageSubSection title="Nullish coalescing">
        <Typography gutterBottom>
          The nullish coalescing operator (<Code>??</Code>) acts very similar to the || operator, except that we don&apos;t use &quot;truthy&quot; when evaluating the operator
        </Typography>
        <Typography gutterBottom>
          Instead we use the definition of <Text>nullish</Text>, meaning is the value strictly equal to <Text>null or undefined</Text>
        </Typography>
        <Typography gutterBottom>
          So imagine the expression lhs ?? rhs: if lhs is not nullish, it evaluates to lhs. Otherwise, it evaluates to rhs
        </Typography>
        <Typography gutterBottom>
          Explicitly, that means the values <Text>false, 0, NaN, and the empty string</Text> are all falsy values that are not nullish. When such falsy-but-not-nullish values are the left-hand side of a lhs ?? rhs, the expression evaluates to them instead of the right-hand side
        </Typography>
        <CodeBlock language="javascript" code={nullishCoalescingCode} />
      </PageSubSection>
      <PageSubSection title="Optional chaining">
        An optional chain is a chain of one or more property accesses and function calls, the first of which begins with the token <Code>?.</Code>
        <CodeBlock language="javascript" code={optionalChainingCode} />
      </PageSubSection>
      <PageSubSection title="Numeric separators">
        Large numeric literals are difficult for the human eye to parse quickly, especially when there are lots of repeating digits
        <CodeBlock language="javascript" code={numericSeparatorsCode} />
      </PageSubSection>
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="http://latentflip.com/loupe" title="JavaScript's call stack/event loop/callback queue interact with each other" />
      <PageReferencesLink href="https://www.youtube.com/watch?v=8aGhZQkoFbQ" title="Youtube: What the heck is the event loop anyway? | Philip Roberts | JSConf EU" />
      <PageReferencesLink href="https://en.wikipedia.org/wiki/ECMAScript" title="Wikipedia: ECMAScript" />
      <PageReferencesLink href="https://dmitripavlutin.com/string-interpolation-in-javascript/" title="String Interpolation in JavaScript" />
      <PageReferencesLink href="https://www.borntodev.com/2020/03/06/%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88-await-async-%E0%B9%83%E0%B8%99-5-%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5/" title="เข้าใจ Await / Async ใน 5 นาที" />
      <PageReferencesLink href="https://v8.dev/features/bigint" title="BigInt: arbitrary-precision integers in JavaScript" />
      <PageReferencesLink href="https://v8.dev/features/object-rest-spread" title="Object rest and spread properties" />
      <PageReferencesLink href="https://2ality.com/2016/10/rest-spread-properties.html" title="ES2018: Rest/Spread Properties" />
      <PageReferencesLink href="https://v8.dev/features/nullish-coalescing" title="Nullish coalescing" />
      <PageReferencesLink href="https://v8.dev/features/optional-chaining" title="Optional chaining" />
      <PageReferencesLink href="https://v8.dev/features/numeric-separators" title="Numeric separators" />
    </PageReferences>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default JavaScriptPage
