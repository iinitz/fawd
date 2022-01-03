import Typography from '@mui/material/Typography'
import { GetStaticProps, NextPage } from 'next'

import { CodeBlock } from '../../components/Code'
import { Page, PageSection } from '../../components/Page'

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
const Web1Page: NextPage = () => (
  /* TODO: Implement this page */
  <Page slug="web1">
    <PageSection id="web1" title="Web 1.0">
      <Typography>HTML</Typography>
      <Typography>URI</Typography>
      <Typography>HTTP</Typography>
      <CodeBlock language="tsx" code={code} />
      <CodeBlock language="tsx" code={code} />
    </PageSection>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default Web1Page
