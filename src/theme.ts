import { blue, red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

// Create a theme instance.
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: red
  }
})

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: blue
  }
})

const themes = {
  dark: darkTheme,
  light: lightTheme
}

export default themes
