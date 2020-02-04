import React, { Component } from "react";
import Upper from "./Upper";
import About from "./About";
import Theme from "./Theme";
import Sponsors from "./Sponsors";
import Artists1 from "./Artists1";
import Gallery from "./Gallery";
// import Events from "./Events";
import Footer from "./Footer";
import Form1 from "./Form";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Form from "./regform/index";
import "../styles/App.scss";
class App extends Component {
  render() {
    return (
      <React.Fragment className="appOuter">
        <Router>
          <Route path="/" exact>
            <Upper />
            <About id="About" />
            <Theme />
            <Sponsors />
            <Artists1 />
            <Gallery />
            {/* <Events /> */}

            <div className="onPc">
              <Form1 />
            </div>
            <Footer />
          </Route>

          <Route path="/form">
            <Form></Form>
          </Route>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
