import React, { Component } from 'react';
import Upper from './Upper';
import About from './About';
import Theme from './Theme';
import Sponsors from './Sponsors';
import Artists1 from './Artists1';
import Gallery from './Gallery';
import Footer from './Footer';
// import Form from './colorlib-regform-3/index';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Upper />
        <About id="About" />
        <Theme />
        <Sponsors />
        <Artists1 />
        <Gallery />
        <Footer />

        {/* <Form></Form> */}
      </React.Fragment>
    );
  }
}

export default App;
