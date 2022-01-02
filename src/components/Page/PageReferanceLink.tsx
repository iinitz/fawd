import { Link } from '../@mui/Link'

export declare interface IPageReferanceLink {
  href: string
  title: string
}
export const PageReferanceLink: React.FC<IPageReferanceLink> = ({ href, title }: IPageReferanceLink) => (
  <li>
    <Link href={href} target="_blank">{title}</Link>
  </li>
)
