'use client'

import * as React from 'react'

const TABLET_BREAKPOINT = 435

export function useMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  )

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${TABLET_BREAKPOINT}px)`)

    const onChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    mql.addEventListener('change', onChange)
    setIsMobile(mql.matches)

    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}
