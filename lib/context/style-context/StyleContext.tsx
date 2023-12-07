'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const StyleContext = createContext({
  withMode: 'md',
})

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
    return () => {
      window.removeEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
      })
    }
  }, [])

  const withMode = windowWidth < 768 ? 'sm' : 'lg'

  return (
    <StyleContext.Provider
      value={{
        withMode: withMode,
      }}
    >
      {children}
    </StyleContext.Provider>
  )
}

export function useStyleContext() {
  const styleContext = useContext(StyleContext)
  if (!styleContext) {
    throw new Error('useStyleContext must be used within StyleProvider')
  }
  return styleContext
}
