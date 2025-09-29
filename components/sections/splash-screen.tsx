"use client"

import { useEffect, useState } from "react"

export function SplashScreen() {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 grid place-items-center transition-all duration-700 ${
        hide ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ background: "var(--color-card)" }}
    >
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="mt-4 font-mono text-sm text-muted-foreground">Loading portfolio...</p>
      </div>
    </div>
  )
}
