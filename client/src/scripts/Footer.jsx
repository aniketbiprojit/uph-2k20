import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../styles/Footer.scss";
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
            <h5 className="title1 ">Our Team</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Mohammed Haaris Beg</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Bhavya Patunjal</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Triya Gulati</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Aritro Sen</a>
              </li>{" "}
              <li className="list-unstyled">
                <a href="#!">Abhishek Dubey</a>
              </li>
            </ul>
          </MDBCol>{" "}
          <MDBCol md="3">
            <h5 className="title1 ">Social Media</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/bu_uphoria/">
                  Instagram-BU_Uphoria
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/bennettians/">
                  Instagram-Bennettians
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/bennettuniv/">
                  Instagram-Bennett Univ
                </a>
              </li>
              <li className="list-unstyled">
                <a href="Bennett.edu.in">
                  Website-Bennett Univ</a>{" "}
                <li className="list-unstyled">
                  <a href="https://www.youtube.com/channel/UCHfIzAGikq-VCo60xvl_VLQ">
                    {" "}
                    Youtube-Bennett Univ
                  </a>
                </li>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.Bennett.edu.in">Bennett University </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
