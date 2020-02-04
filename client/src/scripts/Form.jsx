import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
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
      <MDBContainer className= "register">
        <MDBBtn  color="primary"  onClick={this.toggle(14)}>Register Here</MDBBtn>
        <MDBModal size="fluid"   className="modalOut"  isOpen={this.state.modal14}  centered>
          {/* <MDBModalHeader toggle={this.toggle(14)}></MDBModalHeader> */}
          <MDBModalBody  className = "MDBmodal">
           <Form2   />
          </MDBModalBody>
         
          
        </MDBModal>

      </MDBContainer>
    );
  }
}

export default Form;