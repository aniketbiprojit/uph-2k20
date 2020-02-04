import React, { Component } from "react";
import Nav from "./Nav";
import Form2 from "./regform/index";
import upper from "../assets/uph.png";
// import upper1 from "../assets/uph1.png"
import { MDBContainer, MDBModal, MDBModalBody, MDBBtn } from "mdbreact";

// import upper3 from '../assets/uph-3.png';
import upper4 from "../assets/uph-4.png";

export default class Upper extends Component {
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
      <section className="main Upper">
        <div className="onPc">

        <Nav />
        </div>
      
        <div className="dabba">
          
          <div className="inner row">
            
            <div className="dabbaUpper onPc">
              {/* <Nav /> */}
              
              <img className="imageUpper" src={upper} alt="" />
            </div>
            <div className="dabbaUpper1 onPhone">
              <img className="imageUpper1" src={upper4} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="scroll col-4">
              <div className="inner onPc">
              <MDBContainer className="register">
                  <button
                    className="btn registerPhone buttonreg "
                    onClick={this.toggle(14)}
                  >
                    <p className="text1">Register Here</p>
                  </button>
                  <MDBModal
                    size="fluid"
                    className="modalOut"
                    isOpen={this.state.modal14}
                    centered
                  >
                    {/* <MDBModalHeader toggle={this.toggle(14)}></MDBModalHeader> */}
                    <MDBModalBody className="MDBmodal">
                      <Form2 />
                      <MDBBtn
                        color="primary"
                        className="registerPhone"
                        onClick={this.toggle(14)}
                      >
                        Close
                      </MDBBtn>
                    </MDBModalBody>
                  </MDBModal>
                </MDBContainer>
              </div>
              <div className="inner onPhone">
                <MDBContainer className="register">
                  <button
                    className="btn registerPhone  "
                    onClick={this.toggle(14)}
                  >
                    <p className="text1">Register</p>
                  </button>
                  <MDBModal
                    size="fluid"
                    className="modalOut"
                    isOpen={this.state.modal14}
                    centered
                  >
                    {/* <MDBModalHeader toggle={this.toggle(14)}></MDBModalHeader> */}
                    <MDBModalBody className="MDBmodal">
                      <Form2 />
                      <MDBBtn
                        color="primary"
                        className="registerPhone"
                        onClick={this.toggle(14)}
                      >
                        Close
                      </MDBBtn>
                    </MDBModalBody>
                  </MDBModal>
                </MDBContainer>
              </div>
            </div>

            <div className="dates  col-7">
              <div className="light">
                Bennett University's <br /> Cultural Fest{" "}
              </div>
              {/* <br/> */}
              <div className="heavy">
                {" "}
                <div className="up">14-16</div> FEB{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
