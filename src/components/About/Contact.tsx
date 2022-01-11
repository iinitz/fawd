import GitHubIcon from '@mui/icons-material/GitHub'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { ListItemButton } from '../@mui/ListItemButton'

export const Contact = () => (
  <Paper sx={{ p: 2 }}>
    <Typography variant="h5">
      Contact
    </Typography>
    <Divider sx={{ my: 2 }} />
    <List dense sx={{ p: 0 }}>
      <ListItem disablePadding>
        <ListItemButton href="https://github.com/iinitz">
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
              <GitHubIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="github.com/iinitz" />
        </ListItemButton>
      </ListItem>
    </List>
  </Paper>
)
