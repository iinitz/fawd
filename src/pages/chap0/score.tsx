import { GetStaticProps, NextPage } from 'next'

import { Page } from '../../components/Page'

const ScorePage: NextPage = () => (
  <Page slug="score">
    Score
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default ScorePage
