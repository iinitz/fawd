import { GetStaticProps, NextPage } from 'next'

import { Page, PageHeader } from '../../components/Page'

const IntroductionPage: NextPage = () => (
  <Page index={0}>
    <PageHeader>Introduction</PageHeader>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default IntroductionPage
