import Typography from '@mui/material/Typography'
import { NextPage } from 'next'

import { CodeBlock } from '../../components/Code'
import { Text } from '../../components/Highlight'
import {
  Page, PageQuestion, PageReferences, PageReferencesLink,
} from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const pureFunctionsCode = `
// Impure function
const random = () => Math.random()
console.log(random()) // 0.3550692005082965
console.log(random()) // 0.8533405303023756

// Pure function
const double = (number) => number * 2
console.log(double(4)) // 8
console.log(double(4)) // 8
`
const firstClassAndHigherOrderFunctionsCode = `
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const greaterThan = (number) => (input) => input > number
const greaterThanThree = greaterThan(3)
const greaterThanSeven = greaterThan(7)

console.log(numbers.filter(greaterThanThree)) // [4, 5, 6, 7, 8, 9, 10]
console.log(numbers.filter(greaterThanSeven)) // [8, 9, 10]
`
const imperativeVsFunctionalProgrammingCode = `
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Traditional imperative loop
let result = 0
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    result += numbers[i] * 10
  }
}

// Functional programming with higher-order functions
const result = numbers
  .filter(n => n % 2 === 0)
  .map(a => a * 10)
  .reduce((a, b) => a + b)
`
const quizDetailCode = `
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const x = 5
let result = 0
numbers.forEach((number) => {
  if (number % 2 === 0) {
    result += number * x
  } else {
    result -= number * x
  }
})
console.log(result)
`
const quizAnswerCode = `
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const x = 5
const mapMultiplyNumber = (multiplier) => (number) => {
  if (number % 2 === 0) {
    return number * multiplier
  }
  return -(number * multiplier)
}
const result = numbers
  .map(mapMultiplyNumber(x))
  .reduce((prev, cur) => prev + cur, 0)
console.log(result)
`
const ProgrammingConceptPage: NextPage = () => (
  <Page slug="programming-concept">
    <PageSection id="functional-programming" title="Functional Programming">
      <Typography gutterBottom>
        Functional programming is a programming paradigm where programs are constructed by applying and composing functions. It is a declarative programming paradigm in which function definitions are trees of expressions that map values to other values, rather than a sequence of imperative statements which update the running state of the program
      </Typography>
      <Typography gutterBottom>
        In functional programming, functions are treated as first-class citizens, meaning that they can be bound to names (including local identifiers), passed as arguments, and returned from other functions, just as any other data type can. This allows programs to be written in a declarative and composable style, where small functions are combined in a modular manner
      </Typography>
      <Typography gutterBottom>
        Functional programming is sometimes treated as synonymous with purely functional programming, a subset of functional programming which treats all functions as deterministic mathematical functions, or pure functions. When a pure function is called with some given arguments, it will always return the same result, and cannot be affected by any mutable state or other side effects. This is in contrast with impure procedures, common in imperative programming, which can have side effects (such as modifying the program&apos;s state or taking input from a user). Proponents of purely functional programming claim that by restricting side effects, programs can have fewer bugs, be easier to debug and test, and be more suited to formal verification
      </Typography>
    </PageSection>
    <PageSection id="pure-functions" title="Pure functions">
      Pure functions (or expressions) have no side effects (memory or I/O). This means that pure functions have several useful properties, many of which can be used to optimize the code
      <ul>
        <li>If the result of a pure expression is not used, it can be removed without affecting other expressions</li>
        <li>If a pure function is called with arguments that cause no side-effects, the result is constant with respect to that argument list (sometimes called referential transparency or idempotence), i.e., calling the pure function again with the same arguments returns the same result</li>
        <li>If there is no data dependency between two pure expressions, their order can be reversed, or they can be performed in parallel and they cannot interfere with one another (in other terms, the evaluation of any pure expression is thread-safe)</li>
        <li>If the entire language does not allow side-effects, then any evaluation strategy can be used; this gives the compiler freedom to reorder or combine the evaluation of expressions in a program (for example, using deforestation)</li>
      </ul>
      <CodeBlock language="javascript" code={pureFunctionsCode} />
      <Text>A function is only pure if, given the same input, it will always produce the same output</Text>
    </PageSection>
    <PageSection id="first-class-and-higher-order-functions" title="First-class and higher-order functions">
      <Typography gutterBottom>
        Higher-order functions are functions that can either take other functions as arguments or return them as results
      </Typography>
      <Typography gutterBottom>
        Higher-order functions are closely related to first-class functions in that higher-order functions and first-class functions both allow functions as arguments and results of other functions. The distinction between the two is subtle: &quot;higher-order&quot; describes a mathematical concept of functions that operate on other functions, while &quot;first-class&quot; is a computer science term for programming language entities that have no restriction on their use (thus first-class functions can appear anywhere in the program that other first-class entities like numbers can, including as arguments to other functions and as their return values)
      </Typography>
      <CodeBlock language="javascript" code={firstClassAndHigherOrderFunctionsCode} />
    </PageSection>
    <PageSection id="imperative-vs-functional-programming" title="Imperative vs Functional programming">
      The following two examples (written in JavaScript) achieve the same effect: they multiply all even numbers in an array by 10 and add them all, storing the final sum in the variable &quot;result&quot;
      <CodeBlock language="javascript" code={imperativeVsFunctionalProgrammingCode} />
    </PageSection>
    <PageSection id="quiz" title="Quiz">
      <PageQuestion
        question="Make it PURE"
        detail={(
          <CodeBlock language="javascript" code={quizDetailCode} />
        )}
      >
        <CodeBlock language="javascript" code={quizAnswerCode} />
      </PageQuestion>
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://en.wikipedia.org/wiki/Functional_programming" title="Wikipedia: Functional programming" />
      <PageReferencesLink href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976" title="Master the JavaScript Interview: What is a Pure Function?" />
    </PageReferences>
  </Page>
)

export default ProgrammingConceptPage
