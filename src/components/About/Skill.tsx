import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export const Skill = () => (
  <Paper sx={{ p: 2 }}>
    <Typography variant="h5">
      Skill
    </Typography>
    <Divider sx={{ my: 2 }} />
    <Box sx={{ textAlign: 'center' }}>
      <Chip label="React" sx={{ m: 0.5 }} />
      <Chip label="Next.js" sx={{ m: 0.5 }} />
      <Chip label="GraphQL" sx={{ m: 0.5 }} />
      <Chip label="MongoDB" sx={{ m: 0.5 }} />
      <Chip label="Docker" sx={{ m: 0.5 }} />
      <Chip label="MySQL" sx={{ m: 0.5 }} />
      <Chip label="PostgreSQL" sx={{ m: 0.5 }} />
      <Chip label="TensorFlow.js" sx={{ m: 0.5 }} />
      <Chip label="PeerJS" sx={{ m: 0.5 }} />
      <Chip label="React Native" sx={{ m: 0.5 }} />
      <Chip label="AngularJS" sx={{ m: 0.5 }} />
      <Chip label="Wordpress" sx={{ m: 0.5 }} />
    </Box>
  </Paper>
)
