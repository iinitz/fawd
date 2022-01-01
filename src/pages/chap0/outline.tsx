import { GetStaticProps, NextPage } from 'next'

import { Page } from '../../components/Page'

const OutlinePage: NextPage = () => (
  <Page slug="outline">
    Course outline
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default OutlinePage
