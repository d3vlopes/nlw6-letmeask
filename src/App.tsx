import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AuthContextProvider } from 'contexts/AuthContext'

import { Home } from './pages/Home'
import { NewRoom } from 'pages/NewRoom'
import { Room } from 'pages/Room'
import { AdminRoom } from 'pages/AdminRoom'

import { GlobalStyles } from 'styles/global'
import { theme } from 'styles/themes/default'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />

            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
