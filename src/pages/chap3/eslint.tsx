import { NextPage } from 'next'

import { CodeBlock } from '../../components/Code'
import {
  Page, PageReferences, PageReferencesLink, PageSubSection,
} from '../../components/Page'
import { PageSection } from '../../components/Page/PageSection'

const installCode = `
yarn add --dev eslint
# or
npm install --save-dev eslint
`
const setupCode = `
yarn create @eslint/config
# or
npm init @eslint/config
`
const configCode = `
{
  "extends": "eslint:recommended",
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
`
const ESLintPage: NextPage = () => (
  <Page slug="eslint">
    <PageSection id="eslint" title="ESLint">
      Find and fix problems in your JavaScript code
      <PageSubSection title="Find Problems">
        ESLint statically analyzes your code to quickly find problems. ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline
      </PageSubSection>
      <PageSubSection title="Fix Automatically">
        Many problems ESLint finds can be automatically fixed. ESLint fixes are syntax-aware so you won&apos;t experience errors introduced by traditional find-and-replace algorithms
      </PageSubSection>
      <PageSubSection title="Customize">
        Preprocess code, use custom parsers, and write your own rules that work alongside ESLint&apos;s built-in rules. You can customize ESLint to work exactly the way you need it for your project
      </PageSubSection>
      <PageSubSection title="Installation">
        <CodeBlock language="bash" code={installCode} />
      </PageSubSection>
      <PageSubSection title="Setup">
        <CodeBlock language="bash" code={setupCode} />
        After running, you&apos;ll have a .eslintrc.{'{js,yml,json}'} file in your directory
      </PageSubSection>
    </PageSection>
    <PageSection id="configuration" title="Configuration">
      <CodeBlock language="json" code={configCode} />
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://eslint.org/docs/user-guide/getting-started" title="ESLint: Getting Started with ESLint" />
      <PageReferencesLink href="https://eslint.org/docs/rules/" title="ESLint: Rules" />
      <PageReferencesLink href="https://github.com/dustinspecker/awesome-eslint" title="Github: Awesome ESLint" />
    </PageReferences>
  </Page>
)

export default ESLintPage
