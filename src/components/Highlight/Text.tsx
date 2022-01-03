import Typography from '@mui/material/Typography'

export declare interface ITextProps {
  children: React.ReactNode
}
export const Text: React.FC<ITextProps> = ({ children }: ITextProps) => (
  <Typography component="span" color="secondary" sx={{ fontWeight: 'bold' }}>{children}</Typography>
)
