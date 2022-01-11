import { memo } from 'react'

import { ThemeProvider } from '../../contexts/ThemeContext'

export interface IBaseLayoutProps {
  children?: React.ReactNode
}
const defaultProps: IBaseLayoutProps = {
  children: null,
}
export const BaseLayout: React.FC<IBaseLayoutProps> = memo(({ children }: IBaseLayoutProps) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
))
BaseLayout.defaultProps = defaultProps
