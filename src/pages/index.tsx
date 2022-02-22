import GithubIcon from '@mui/icons-material/GitHub'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'

import { Link } from '../components/@mui/Link'
import { Page } from '../components/Page'

const IndexPage: NextPage = () => (
  <Page title="Hello, World!">
    <Box display="flex" flexGrow={1} flexDirection="column" justifyContent="center" alignItems="center" sx={{ textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        06016384: SPECIAL TOPICS IN SOFTWARE ENGINEERING 2<br />(Full-stack Web Developer)
      </Typography>
      <Typography variant="h5">
        2564/2, Wed 13:00-16:00
      </Typography>
      <Divider flexItem sx={{ mx: { xs: '10%', sm: '20%' }, my: 2 }} />
      <Typography variant="h5" gutterBottom>
        by <Link href="/about">Saksit Sawang</Link>
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Source code: <Link href="https://github.com/iinitz/fswd-code-64" target="_blank"><GithubIcon fontSize="small" />/fswd-code-64</Link>
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Other resources: <Link href="https://discord.gg/fjFHMRUHEZ" target="_blank">Join Discord</Link>
      </Typography>
    </Box>
  </Page>
)

export default IndexPage
