import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody } from 'mdbreact';
import Form2 from "./regform/index";
import "../styles/Form.scss"; 
class Form extends Component {
state = {
  modal14: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
      <MDBContainer d="register" className= "register">
        <MDBBtn  color="white" className="registerPhone z-depth-3" onClick={this.toggle(14)}> Register Here  </MDBBtn>
        <MDBModal size="fluid"   className="modalOut"  isOpen={this.state.modal14}  centered>
          {/* <MDBModalHeader toggle={this.toggle(14)}></MDBModalHeader> */}
          <MDBModalBody  className = "MDBmodal">
           <Form2   />
           <MDBBtn  color="white" className="registerPhone" onClick={this.toggle(14)}>Close</MDBBtn>
          </MDBModalBody>
         
          
        </MDBModal>

      </MDBContainer>
    );
  }
}

export default Form;