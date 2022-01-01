import { GetStaticProps, NextPage } from 'next'

import { Page, PageHeader } from '../../components/Page'

const ScorePage: NextPage = () => (
  <Page index={2}>
    <PageHeader>Score</PageHeader>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default ScorePage
