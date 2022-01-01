import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export declare interface IPageSubSectionProps {
  title: string
  children?: React.ReactNode
}
export const PageSubSection: React.FC<IPageSubSectionProps> = ({ title, children }: IPageSubSectionProps) => (
  <Box>
    <Typography variant="h6" gutterBottom>{title}</Typography>
    {children}
  </Box>
)
