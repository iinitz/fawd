import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Typography from '@mui/material/Typography'
import { Fragment } from 'react'

import { pages, menus } from '../../contents'
import { ListItemButton } from '../@mui/ListItemButton'

export const SidebarMenu = () => (
  <Fragment>
    {Object.entries(menus).map(([group, title]) => (
      <Fragment key={group}>
        <List
          subheader={(
            <ListSubheader color="primary">{title}</ListSubheader>
          )}
        >
          {Object.entries(pages).filter(([_, page]) => page.group === group).map(([slug, page]) => (
            <ListItem disablePadding key={slug}>
              <ListItemButton href={`/${page.group}/${slug}`}>
                <ListItemText primary={<Typography variant="subtitle1">{page.title}</Typography>} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Fragment>
    ))}
  </Fragment>
)
