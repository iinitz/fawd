import { GetStaticProps, NextPage } from 'next'

import { Page } from '../../components/Page'

const IntroductionPage: NextPage = () => (
  /* TODO: Implement this page */
  <Page slug="introduction">
    Introduction
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default IntroductionPage
