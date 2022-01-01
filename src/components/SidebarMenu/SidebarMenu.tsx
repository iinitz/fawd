import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import { Fragment } from 'react'

import { pages, menus } from '../../contents'
import { ListItemButton } from '../@mui/ListItemButton'

export const SidebarMenu = () => (
  <Fragment>
    {Object.entries(menus).map(([key, value]) => (
      <Fragment key={key}>
        <List
          subheader={(
            <ListSubheader>{value}</ListSubheader>
          )}
        >
          {pages.filter((page) => page.group === key).map((page) => (
            <ListItem disablePadding key={page.url}>
              <ListItemButton href={`/${page.group}${page.url}`}>
                <ListItemText primary={page.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Fragment>
    ))}
  </Fragment>
)
