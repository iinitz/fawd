import MuiListItemButton, { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { forwardRef, Ref } from 'react'

type LinkRef = HTMLAnchorElement
export type ListItemButtonProps = Omit<MuiListItemButtonProps, 'href' | 'classes'> & Pick<NextLinkProps, 'href' | 'prefetch'>

const LinkComponent = ({ href, prefetch, ...props }: NextLinkProps, ref: Ref<LinkRef>) => {
  const router = useRouter()
  const isActive = router.pathname === href
  return (
    <NextLink href={href} prefetch={prefetch} passHref>
      <MuiListItemButton ref={ref} component="a" selected={isActive} {...props} />
    </NextLink>
  )
}
export const ListItemButton = forwardRef<LinkRef, ListItemButtonProps>(LinkComponent)
