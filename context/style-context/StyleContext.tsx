'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const StyleContext = createContext({
  widthMode: 'lg',
})

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const widthMode = windowWidth && windowWidth < 768 ? 'sm' : 'lg'

  return (
    <StyleContext.Provider
      value={{
        widthMode: widthMode,
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
