import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="inner1 row">
          <div className="left col-6">
            <div className="text">
              <p className="inner">
                UPHORIA
                <br />
                2020
              </p>
            </div>
          </div>
          <div className="right  col-6">	
            <nav className="row">
              <div className="elem col-2"></div>
              <div className="elem col-2">
                <p className="text"> About Us</p>
              </div>
              <div className="elem col-2">
                <p className="text"> Theme</p>
              </div>
              <div className="elem col-2">
                <p className="text"> Sponsors</p>
              </div>
              <div className="elem col-2">
                <p className="text"> Archives</p>
              </div>
              <div className="elem col-2">
                <p className="text"> Register</p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
