import Box from '@mui/material/Box'
import Image, { ImageProps } from 'next/image'

export const PageImage: React.FC<ImageProps> = (props: ImageProps) => (
  <Box display="flex" justifyContent="center" sx={{ mx: 'auto', my: 2 }}>
    <Image {...props} />
  </Box>
)
