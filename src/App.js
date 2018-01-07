import React, { Component } from 'react'
import Home from './pages/Home'
import { Container } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </Container>
    )
  }
}

export default App