import React, { Component } from "react";
import Upper from "./Upper";
import About from "./About";
import Theme from "./Theme";
import Sponsors from "./Sponsors";
import Artists from "./Artists";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Upper />
        <About />
        <Theme />

        <Sponsors />
		<Artists />
      </React.Fragment>
    );
  }
}

export default App;
