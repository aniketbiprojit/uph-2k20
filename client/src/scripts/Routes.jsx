import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Form from './regform/index';
import React, { Component } from 'react';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Switch>
      </Router>
    );
  }
}
