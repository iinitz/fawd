import HelpIcon from '@mui/icons-material/Help'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import {
  Fragment, memo, useCallback, useMemo, useState,
} from 'react'

import { useApp } from '../../contexts/AppContext'
import { useTheme } from '../../contexts/ThemeContext'
import { ThemeMode } from '../../types'
import { AppBar } from '../@mui/AppBar'
import { ListItemButton } from '../@mui/ListItemButton'
import { ThemeSwitch } from '../@mui/ThemeSwitch'
import { SidebarMenu } from '../SidebarMenu'

const drawerWidth = 256
export declare interface IAppLayoutProps {
  window?: () => Window
  children?: React.ReactNode
}
const defaultProps: IAppLayoutProps = {
  children: null,
}
export const AppLayout: React.FC<IAppLayoutProps> = memo(({ window, children }: IAppLayoutProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const router = useRouter()
  const { title } = useApp()
  const { currentTheme, switchTheme } = useTheme()
  const handleDrawerToggle = useCallback(
    () => {
      setOpen((prev) => !prev)
    },
    [],
  )
  const handleRedirectToAbout = useCallback(
    async () => {
      await router.push('/about')
    },
    [router],
  )
  const container = useMemo(
    () => (window !== undefined ? () => window().document.body : undefined),
    [window],
  )
  const drawer = useMemo(
    () => (
      <Fragment>
        <List>
          <ListItem disablePadding>
            <ListItemButton href="/" selected={false}>
              <ListItemText primary="Full-stack Web Developer" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <Box flexGrow={1} sx={{ overflowY: 'auto' }}>
          <SidebarMenu />
        </Box>
      </Fragment>
    ),
    [],
  )
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          width: { xs: '100vw', sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Box display="flex" flexGrow={1} alignItems="center" sx={{ width: '100%' }}>
            <IconButton edge="start" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' }, mr: 1 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" sx={{ mr: 1 }} noWrap>{title}</Typography>
            <Box flexGrow={1} />
            <Box display="flex" alignItems="center">
              <Box display={{ xs: 'none', sm: 'flex' }} alignItems="center">
                <ThemeSwitch checked={currentTheme === ThemeMode.Dark} onChange={switchTheme} sx={{ mr: 1 }} />
                <Divider orientation="vertical" flexItem sx={{ mr: 1 }} />
              </Box>
              <IconButton edge="end" onClick={handleRedirectToAbout}>
                <HelpIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundImage: 'none' },
          }}
        >
          {drawer}
          <Divider />
          <List>
            <ListItem
              secondaryAction={(
                <ThemeSwitch checked={currentTheme === ThemeMode.Dark} onChange={switchTheme} />
              )}
            >
              <ListItemText primary="Theme" />
            </ListItem>
          </List>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        display="flex"
        flexDirection="column"
        flexGrow={1}
        sx={{
          width: { xs: '100vw', sm: `calc(100% - ${drawerWidth}px)` },
          height: '100vh',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
})
AppLayout.defaultProps = defaultProps
