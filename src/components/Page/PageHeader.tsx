import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { Fragment } from 'react'

export declare interface IPageHeaderProps {
  children: React.ReactNode
}
export const PageHeader: React.FC<IPageHeaderProps> = ({ children }: IPageHeaderProps) => (
  <Fragment>
    <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>{children}</Typography>
    <Divider />
  </Fragment>
)
