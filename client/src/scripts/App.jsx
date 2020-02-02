import React, { Component } from 'react'
import Upper from './Upper'
import About from './About'
import Theme from './Theme'
import Sponsors from './Sponsors'
import Artists1 from './Artists1'
import Gallery from './Gallery'
import Events from './Events'
import Footer from './Footer'

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Form from './regform/index'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route path='/' exact>
            <Upper />
            <About id='About' />
            <Theme />
            <Sponsors />
            <Artists1 />
            <Gallery />
            <Events />
            <Footer />
          </Route>

          <Route path='/form'>
            <Form></Form>
          </Route>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
