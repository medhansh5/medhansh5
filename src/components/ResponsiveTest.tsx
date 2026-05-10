'use client'

import { useState, useEffect } from 'react'

const ResponsiveTest = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    breakpoint: ''
  })

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth
      let breakpoint = 'mobile'
      
      if (width >= 1024) {
        breakpoint = 'desktop'
      } else if (width >= 768) {
        breakpoint = 'tablet'
      }
      
      setScreenSize({
        width,
        height: window.innerHeight,
        breakpoint
      })
    }

    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  if (process.env.NODE_ENV === 'production') return null

  return (
    <div className="fixed bottom-4 right-4 bg-primary/90 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div>Width: {screenSize.width}px</div>
      <div>Height: {screenSize.height}px</div>
      <div>Breakpoint: {screenSize.breakpoint}</div>
    </div>
  )
}

export default ResponsiveTest
