import Typography, { TypographyProps } from '@mui/material/Typography'

export const Text: React.FC<TypographyProps> = (props: TypographyProps) => (
  <Typography component="span" color="secondary" sx={{ fontWeight: 'bold' }} {...props} />
)
