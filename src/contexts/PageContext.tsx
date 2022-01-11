import {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
} from 'react'

interface ISection {
  title: string
  id: string
  ref: React.RefObject<HTMLDivElement>
}
export interface IPageContext {
  sections: ISection[]
  registerSection: (section: ISection) => void
  unregisterSection: (id: string) => void
}
export const PageContect = createContext({} as IPageContext)

export interface IPageProviderProps {
  children: React.ReactNode
}
export const PageProvider: React.FC<IPageProviderProps> = ({ children }: IPageProviderProps) => {
  const [sections, setSections] = useState<(ISection | undefined)[]>([])
  const registerSection = useCallback(
    (section: ISection) => {
      setSections((prev) => {
        const index = prev.findIndex((s) => s === undefined)
        if (index !== -1) {
          return [...prev.slice(0, index), section, ...prev.slice(index + 1)]
        }
        return [...prev, section]
      })
    },
    [],
  )
  const unregisterSection = useCallback(
    (id: string) => {
      setSections((prev) => {
        const index = prev.findIndex((section) => section?.id === id)
        return [...prev.slice(0, index), undefined, ...prev.slice(index + 1)]
      })
    },
    [],
  )
  const value = useMemo(
    () => ({
      sections: sections.filter((section) => section !== undefined) as ISection[],
      registerSection,
      unregisterSection,
    }),
    [registerSection, sections, unregisterSection],
  )
  useEffect(
    () => () => {
      setSections([])
    },
    [],
  )
  return (
    <PageContect.Provider value={value}>
      {children}
    </PageContect.Provider>
  )
}

export const usePage = () => useContext(PageContect)
