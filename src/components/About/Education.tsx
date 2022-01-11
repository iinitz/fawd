import SchoolIcon from '@mui/icons-material/School'
import Timeline from '@mui/lab/Timeline'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export const Education = () => (
  <Paper sx={{ p: 2 }}>
    <Typography variant="h5">
      Education
    </Typography>
    <Divider sx={{ my: 2 }} />
    <Timeline position="left" sx={{ py: 0, m: 0 }}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
        >
          <Typography variant="h6" component="span">
            King Mongkut&rsquo;s Institute of Technology Ladkrabang
          </Typography>
          <Typography color="textSecondary">
            Bachelor of Science (BS), Information Technology
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
        </TimelineSeparator>
      </TimelineItem>
    </Timeline>
  </Paper>
)
