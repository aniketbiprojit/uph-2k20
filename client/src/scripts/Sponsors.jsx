import React, { Component } from 'react';
import '../styles/Sponsors.scss';
import sterling from '../assets/sterling.png';
import airtel from '../assets/airtel.png';
import kia from '../assets/kia.png';
import indus from '../assets/indus.png';
import ics from '../assets/ics.png';
import monster from '../assets/monster.png';
import reverb from '../assets/reverb.png';
import rolls from '../assets/rolls.png';
import toi from '../assets/toi.png';
import va from '../assets/va.png';
import nike from '../assets/nike.png';
import jio from '../assets/jio.png';

import ClientSlider from './ClientSlider';
class Sponsors extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="outer_Sponsors " id= "sponsors">
          <div className="inner">
            <span className="heading link--kukuri  headingSponsors">
              Previous Sponsors
            </span>
          </div>
          <div className="onPhone">
            <ClientSlider />
          </div>
          <br />
          <div className="onPC">
            <div className="row">
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={sterling} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={airtel} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={kia} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={indus} alt="" />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={ics} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={monster} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={reverb} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={rolls} alt="" />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={toi} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={va} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={nike} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={jio} alt="" />
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
