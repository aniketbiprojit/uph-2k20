import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import '../styles/Footer.scss';
const Footer = () => {
  return (
    <MDBFooter
      color="elegant-color-dark

    "
      className="font-small pt-4 mt-4"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title1 ">Uphoria 2020</h5>
            <p>
              <span className="Bennettname">Bennett University's</span> annual
              cultural fest
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title1 ">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>{' '}
          <MDBCol md="3">
            <h5 className="title1 ">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href="https://www.Bennett.edu.in">Bennett University </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
