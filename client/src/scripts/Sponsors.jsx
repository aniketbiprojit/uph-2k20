import React, { Component } from "react";
import "../styles/Sponsors.scss";
import patel from "../assets/patel.png";
import ClientSlider from "./ClientSlider";
class Sponsors extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="outer_Sponsors ">
        
          <div className="inner">
            <span className="heading">Sponsors</span>
          </div>
          <div className="onPhone">
          <ClientSlider />
        </div>
          <br />
          <div className="onPC">
            <div className="row">
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={patel} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={patel} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={patel} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={patel} alt="" />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={patel} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={patel} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={patel} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={patel} alt="" />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={patel} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={patel} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={patel} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={patel} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </React.Fragment>
    );
  }
}

export default Sponsors;
