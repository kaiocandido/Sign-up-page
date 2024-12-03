import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './assets/Container'
import GlobalStyles from './assets/Styles/styles'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
