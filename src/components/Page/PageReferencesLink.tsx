import { Link } from '../@mui/Link'

export declare interface IPageReferencesLink {
  href: string
  title: string
}
export const PageReferencesLink: React.FC<IPageReferencesLink> = ({ href, title }: IPageReferencesLink) => (
  <li>
    <Link href={href} target="_blank">{title}</Link>
  </li>
)
