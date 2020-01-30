import React, { Component } from "react";
import "../styles/Nav.scss";
// import register from 'https://www.uphoria.co.in/form';
// import { ExternalLink } from 'react-external-link';
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
                <p className="text"> 
                <a href="https://www.uphoria.co.in/#about">

                About Us
                </a>
                </p>
              </div>
              <div className="elem col-2">

                <p className="text"> 
              <a href="https://www.uphoria.co.in/#theme">
                
                Theme
                
                </a></p>
              </div>
              <div className="elem col-2">

                
                <p className="text"> 
                <a href="https://www.uphoria.co.in/#sponsors">

                Sponsors

                </a></p>

              </div>
              <div className="elem col-2">
                <p className="text">
                <a href="https://www.uphoria.co.in/#artists">
                   Artists</a>
                   </p>
              </div>
              <div className="elem col-2 ">
              {/* <ExternalLink href="https://www.uphoria.co.in/form" > */}
                  <p className="text">
                    <a href="https://www.uphoria.co.in/form">
                      {" "}
                      Register
                    </a>
                  </p>
                  {/* </ExternalLink> */}
                {/* </a> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
