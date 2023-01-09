import React from "react"
import { Button, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material"
import { useEffect, useState } from "react"
import themes from "./theme"

const getInitialPaletteMode = (initialPaletteMode): PaletteMode => {
  if (initialPaletteMode === "unset") {
    return "light"
  } else {
    return initialPaletteMode
  }
}

const Layout = ({ children, initialPaletteMode }: any) => {
  const [paletteMode, setPaletteMode] = useState<PaletteMode>(
    getInitialPaletteMode(initialPaletteMode)
  )
  const [theme, setTheme] = useState(themes[paletteMode])

  useEffect(() => {
    localStorage.setItem("mode", paletteMode)
    setTheme(themes[paletteMode])
  }, [paletteMode])

  const toggleTheme = () => {
    setPaletteMode(paletteMode === "dark" ? "light" : "dark")
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <Button onClick={toggleTheme}>Toggle theme</Button>
    </ThemeProvider>
  )
}

export default Layout
