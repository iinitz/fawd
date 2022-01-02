import { PageSection } from './PageSection'

export declare interface IPageReferanceProps {
  children: React.ReactNode
}
export const PageReferance: React.FC<IPageReferanceProps> = ({ children }: IPageReferanceProps) => (
  <PageSection id="referance" title="Referance">
    <ul>
      {children}
    </ul>
  </PageSection>
)
