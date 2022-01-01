import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import Head from 'next/head'
import { useEffect, useMemo } from 'react'

import { menus, pages } from '../../contents'
import { useApp } from '../../contexts/AppContext'
import { PageProvider } from '../../contexts/PageContext'

import { PageActions } from './PageActions'
import { PageContent } from './PageContent'

export declare interface IPageProps {
  index?: number
  title?: string
  children?: React.ReactNode
}
export const Page: React.FC<IPageProps> = ({ index, title = '', children }: IPageProps) => {
  const { setTitle } = useApp()
  const pageTitle = useMemo(
    () => {
      if (index) {
        return menus[pages[index].group]
      }
      return title
    },
    [index, title],
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
        <title>{index ? pages[index].title : pageTitle} - {process.env.NEXT_PUBLIC_APP_NAME}</title>
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
          {children}
          {index ? <PageActions index={index} /> : null}
        </PageContent>
      </Box>
    </PageProvider>
  )
}
