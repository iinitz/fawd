import { GetStaticProps, NextPage } from 'next'

import { Page, PageHeader } from '../../components/Page'

const OutlinePage: NextPage = () => (
  <Page index={1}>
    <PageHeader>Course outline</PageHeader>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default OutlinePage
