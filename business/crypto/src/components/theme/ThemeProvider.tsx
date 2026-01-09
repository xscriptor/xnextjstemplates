"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

export type ThemeMode = "light" | "dark"

type ThemeContextValue = {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function applyDomTheme(mode: ThemeMode) {
  const root = document.documentElement
  if (mode === "dark") root.classList.add("dark")
  else root.classList.remove("dark")
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "dark"

    const saved = window.localStorage.getItem("x-theme")
    if (saved === "light" || saved === "dark") return saved

    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? true
    return prefersDark ? "dark" : "light"
  })

  useEffect(() => {
    applyDomTheme(mode)
    window.localStorage.setItem("x-theme", mode)
  }, [mode])

  const setMode = useCallback((nextMode: ThemeMode) => {
    setModeState(nextMode)
  }, [])

  const toggle = useCallback(() => {
    setModeState((prev) => (prev === "dark" ? "light" : "dark"))
  }, [])

  const value = useMemo(() => ({ mode, setMode, toggle }), [mode, setMode, toggle])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useThemeMode() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("ThemeProvider missing")
  return ctx
}
