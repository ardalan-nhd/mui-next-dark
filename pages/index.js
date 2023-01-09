import * as React from "react"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material"

export default function Index() {
  const theme = useTheme()
  return (
    <Typography variant="h1" color="primary.main" mb={4}>
      {theme.palette.mode} mode
    </Typography>
  )
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}
