import {
  createContext, useContext, useMemo, useState,
} from 'react'

export declare interface IAppContext {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
}
export const AppContext = createContext<IAppContext>({} as IAppContext)

export declare interface IAppProviderProps {
  children: React.ReactNode
}
export const AppProvider: React.FC<IAppProviderProps> = ({ children }: IAppProviderProps) => {
  const [title, setTitle] = useState<string>('')
  const value = useMemo(
    () => ({
      title,
      setTitle,
    }),
    [title],
  )
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
