import React, { Component } from 'react';
import '../styles/Sponsors.scss';
import brewhouse from '../assets/brewhouse.png';
import campusbloggers from '../assets/campusbloggers.png';
import cornitos from '../assets/cornitos.png';
import dubeat from '../assets/dubeat.png';
import duexpress from '../assets/duexpress.png';
import ed from '../assets/ed.png';
import emoi from '../assets/emoi.png';
import intercell from '../assets/intercell.png';
import microsoft from '../assets/microsoft.png';
import ohcampus from '../assets/ohcampus.png';
import pizzasquare from '../assets/pizzasquare.png';
import theeducationtree from '../assets/theeducationtree.png';


import ClientSlider from './ClientSlider';
class Sponsors extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="outer_Sponsors " id= "sponsors">
          <div className="inner">
            <span className="heading link--kukuri  headingSponsors">
              Our Sponsors
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
                  <img className="sponsorImage" src={brewhouse} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={campusbloggers} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={cornitos} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={dubeat} alt="" />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={duexpress} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={ed} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={emoi} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={intercell} alt="" />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={microsoft} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={ohcampus} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={pizzasquare} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-3 sponsorDabba">
                <p>
                  <img className="sponsorImage" src={theeducationtree} alt="" />
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
