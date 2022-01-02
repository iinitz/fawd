import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { forwardRef, Ref } from 'react'

type LinkRef = HTMLAnchorElement
export type LinkProps = Omit<MuiLinkProps, 'href' | 'classes'> & Pick<NextLinkProps, 'href' | 'prefetch' | 'replace'>

const LinkComponent = (
  {
    href, prefetch, replace, ...props
  }: NextLinkProps,
  ref: Ref<LinkRef>,
) => {
  const router = useRouter()
  const isActive = router.asPath === href
  return (
    <NextLink href={href} prefetch={prefetch} passHref replace={replace}>
      <MuiLink ref={ref} color={isActive ? 'primary' : 'inherit'} underline="hover" {...props} />
    </NextLink>
  )
}
export const Link = forwardRef<LinkRef, LinkProps>(LinkComponent)
