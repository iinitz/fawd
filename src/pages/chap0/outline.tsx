import { GetStaticProps, NextPage } from 'next'

import { Link } from '../../components/@mui/Link'
import { Page, PageSection } from '../../components/Page'
import { menus, pages } from '../../contents'

const OutlinePage: NextPage = () => (
  <Page slug="outline">
    <PageSection id="chap1" title={menus.chap1}>
      <ul>
        {Object.entries(pages).filter(([_, page]) => page.group === 'chap1').map(([slug, page]) => (
          <li key={slug}>
            <Link href={`/${page.group}/${slug}`} variant="subtitle1">{page.title}</Link>
          </li>
        ))}
      </ul>
    </PageSection>
    <PageSection id="chap2" title={menus.chap2}>
      <ul>
        {Object.entries(pages).filter(([_, page]) => page.group === 'chap2').map(([slug, page]) => (
          <li key={slug}>
            <Link href={`/${page.group}/${slug}`} variant="subtitle1">{page.title}</Link>
          </li>
        ))}
      </ul>
    </PageSection>
    <PageSection id="chap3" title={menus.chap3}>
      <ul>
        {Object.entries(pages).filter(([_, page]) => page.group === 'chap3').map(([slug, page]) => (
          <li key={slug}>
            <Link href={`/${page.group}/${slug}`} variant="subtitle1">{page.title}</Link>
          </li>
        ))}
      </ul>
    </PageSection>
    <PageSection id="chap4" title={menus.chap4}>
      <ul>
        {Object.entries(pages).filter(([_, page]) => page.group === 'chap4').map(([slug, page]) => (
          <li key={slug}>
            <Link href={`/${page.group}/${slug}`} variant="subtitle1">{page.title}</Link>
          </li>
        ))}
      </ul>
    </PageSection>
    <PageSection id="chap5" title={menus.chap5}>
      <ul>
        {Object.entries(pages).filter(([_, page]) => page.group === 'chap5').map(([slug, page]) => (
          <li key={slug}>
            <Link href={`/${page.group}/${slug}`} variant="subtitle1">{page.title}</Link>
          </li>
        ))}
      </ul>
    </PageSection>
    <PageSection id="chap6" title={menus.chap6}>
      <ul>
        {Object.entries(pages).filter(([_, page]) => page.group === 'chap6').map(([slug, page]) => (
          <li key={slug}>
            <Link href={`/${page.group}/${slug}`} variant="subtitle1">{page.title}</Link>
          </li>
        ))}
      </ul>
    </PageSection>
  </Page>
)
export const getStaticProps: GetStaticProps = () => ({
  props: { },
})

export default OutlinePage
