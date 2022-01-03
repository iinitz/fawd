import Typography from '@mui/material/Typography'
import { GetStaticProps, NextPage } from 'next'

import { CodeBlock } from '../../components/Code'
import {
  Page, PageReferences, PageReferencesLink, PageSection,
} from '../../components/Page'

const code = `
import React from "react";
import uniquePropHOC from "./lib/unique-prop-hoc";

// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully

class Expire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { component: props.children }
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          component: null
        });
      },
      this.props.time || this.props.seconds * 1000,
    );
  }

  render() {
    return this.state.component;
  }
}

export default uniquePropHOC(["time", "seconds"])(Expire);
`
const Web3Page: NextPage = () => (
  /* TODO: Implement this page */
  <Page slug="web3">
    <PageSection id="web3" title="Web 3.0">
      <Typography>HTML</Typography>
      <Typography>URI</Typography>
      <Typography>HTTP</Typography>
      <CodeBlock language="tsx" code={code} />
      <CodeBlock language="tsx" code={code} />
    </PageSection>
    <PageReferences>
      <PageReferencesLink href="https://medium.com/polkadot-network/one-article-to-understand-the-past-present-and-future-of-web-3-0-5433962b7c3e" title="One Article to Understand The Past, Present, and Future of Web 3.0" />
    </PageReferences>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default Web3Page
