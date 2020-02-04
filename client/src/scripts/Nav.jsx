import React, { Component } from "react";
import "../styles/Nav.scss";
import Form2 from "./regform/index";
// import { Link } from 'react-router-dom';
import { MDBContainer, MDBModal, MDBModalBody, MDBBtn } from "mdbreact";
export default class Nav extends Component {
  state = {
    modal14: false
  };
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };
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
            <div className="left  col-6">
            </div>
        </div>
      </div>
    );
  }
}
