import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import Head from 'next/head'
import { useEffect, useMemo } from 'react'

import {
  menus, pages, Slug, slugs,
} from '../../contents'
import { useApp } from '../../contexts/AppContext'
import { PageProvider } from '../../contexts/PageContext'

import { PageActions } from './PageActions'
import { PageContent } from './PageContent'
import { PageHeader } from './PageHeader'

export declare interface IPageProps {
  slug?: Slug
  title?: string
  children?: React.ReactNode
}
export const Page: React.FC<IPageProps> = ({ slug, title = '', children }: IPageProps) => {
  const { setTitle } = useApp()
  const pageTitle = useMemo(
    () => {
      if (slug) {
        return menus[pages[slug].group]
      }
      return title
    },
    [slug, title],
  )
  const index = useMemo(
    () => slugs.findIndex((s) => s === slug),
    [slug],
  )
  useEffect(
    () => {
      setTitle(pageTitle)
    },
    [setTitle, pageTitle],
  )
  return (
    <PageProvider>
      <Head>
        <title>{slug ? pages[slug].title : pageTitle} - {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <Box
        display="flex"
        sx={{
          height: (theme: Theme) => ({
            xs: `calc(100% - ${theme.mixins.toolbar.minHeight as string}px)`,
            sm: `calc(100% - ${(theme.mixins.toolbar[theme.breakpoints.up('sm')] as React.CSSProperties).minHeight as string}px)`,
          }),
        }}
      >
        <PageContent>
          <PageHeader>{slug ? pages[slug].title : pageTitle}</PageHeader>
          {children}
          {index !== -1 ? <PageActions index={index} /> : null}
        </PageContent>
      </Box>
    </PageProvider>
  )
}
