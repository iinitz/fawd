import { PageSection } from './PageSection'

export interface IPageReferencesProps {
  children: React.ReactNode
}
export const PageReferences: React.FC<IPageReferencesProps> = ({ children }: IPageReferencesProps) => (
  <PageSection id="references" title="References">
    <ul>
      {children}
    </ul>
  </PageSection>
)
