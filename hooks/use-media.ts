"use client"

import { useCallback, useSyncExternalStore } from "react"

export function useMedia(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const matchMedia = window.matchMedia(query)
      matchMedia.addEventListener("change", onChange)
      return () => matchMedia.removeEventListener("change", onChange)
    },
    [query]
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    // ponytail: server snapshot false, show the slider variant until hydration
    () => false
  )
}
