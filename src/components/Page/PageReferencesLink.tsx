import { Link } from '../@mui/Link'

export interface IPageReferencesLinkProps {
  href: string
  title: string
}
export const PageReferencesLink: React.FC<IPageReferencesLinkProps> = ({ href, title }: IPageReferencesLinkProps) => (
  <li>
    <Link href={href} target="_blank">{title}</Link>
  </li>
)
