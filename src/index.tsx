import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'

import { GlobalStyles } from 'styles/global'
import { theme } from 'styles/themes/default'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById('root'),
)
