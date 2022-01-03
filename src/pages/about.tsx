import { GetStaticProps, NextPage } from 'next'

import { Page } from '../components/Page'

const AboutPage: NextPage = () => (
  /* TODO: Implement this page */
  <Page title="About" />
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default AboutPage
