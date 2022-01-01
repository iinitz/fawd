import {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react'

declare interface ISection {
  title: string
  id: string
  ref: React.RefObject<HTMLDivElement>
}
export declare interface IPageContext {
  sections: ISection[]
  registerSection: (section: ISection) => void
}
export const PageContect = createContext({} as IPageContext)

export declare interface IPageProviderProps {
  children: React.ReactNode
}
export const PageProvider: React.FC<IPageProviderProps> = ({ children }: IPageProviderProps) => {
  const [sections, setSections] = useState<ISection[]>([])
  const registerSection = useCallback(
    (section: ISection) => {
      setSections((prev) => [...prev, section])
    },
    [],
  )
  const value = useMemo(
    () => ({
      sections,
      registerSection,
    }),
    [registerSection, sections],
  )
  return (
    <PageContect.Provider value={value}>
      {children}
    </PageContect.Provider>
  )
}

export const usePage = () => useContext(PageContect)
