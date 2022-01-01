import { GetStaticProps, NextPage } from 'next'

import { Page, PageHeader } from '../components/Page'

const AboutPage: NextPage = () => (
  <Page title="About">
    <PageHeader>About</PageHeader>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default AboutPage
