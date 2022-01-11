import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export const BasicInfo = () => (
  <Paper sx={{ p: 2 }}>
    <Box display="flex" flexDirection="column" alignItems="center">
      <Avatar alt="Saksit Sawang" src="/images/iinitz.jpg" sx={{ width: 100, height: 100, mb: 1 }} />
      <Typography variant="h5">
        Saksit Sawang
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Developer Team Lead
      </Typography>
    </Box>
    <Divider sx={{ my: 2 }} />
    <Box sx={{ textAlign: 'center' }}>
      <Typography color="textSecondary">
        Just coding ...
      </Typography>
    </Box>
  </Paper>
)
