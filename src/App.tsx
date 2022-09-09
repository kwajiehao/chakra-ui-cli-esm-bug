import '@opengovsg/design-system-react/build/fonts/inter.css'

import { ThemeProvider } from '@opengovsg/design-system-react'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    </ThemeProvider>
  )
}

export default App
