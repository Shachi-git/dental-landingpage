'use client'

import * as React from "react"

const MEDIUM_BREAKPOINT = 1023

export function useMobileOrTablet() {
  const [isMobileOrTablet, setMobileOrTablet] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MEDIUM_BREAKPOINT}px)`)

    const onChange = (event: MediaQueryListEvent) => {
      setMobileOrTablet(event.matches)
    }

    mql.addEventListener("change", onChange)
    setMobileOrTablet(mql.matches)

    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobileOrTablet
}