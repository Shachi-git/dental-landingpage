'use client'

import * as React from 'react'

const TABLET_BREAKPOINT = 1024

export function useResponsiveDevice() {
  const [isBelowDektop, setIsBelowDektop] = React.useState<boolean | undefined>(
    undefined
  )

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${TABLET_BREAKPOINT}px)`)

    const onChange = (event: MediaQueryListEvent) => {
      setIsBelowDektop(event.matches)
    }

    mql.addEventListener('change', onChange)
    setIsBelowDektop(mql.matches)

    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isBelowDektop
}
