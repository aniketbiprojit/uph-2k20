import React, { Component } from "react";
import aboutImg from "../assets/about.png";
export default class About extends Component {
  render() {
    return (
      <section className="Common About ">
        <div className="inner">
          <div className="content row">
            <div className="imagePhone">
              <img className="imageSize" src={aboutImg} alt="" />
            </div>
            <div className="text col-sm-12 col-md-6">
              <div className="heading">About US</div>
              <div className="textMore">
                Uphoria – inspired by the ‘euphoric’ feeling experienced when
                attending, is an annual festival conducted in Bennett
                University. Our intention is to establish the feeling of
                elation, within each one you.
                <br />
                <br />
                To invigorate and energize you, ensuring that you leave feeling
                pure bliss. We hope to see you making new memories with us this
                year at Uphoria 4.0!
              </div>
            </div>
            <div className="art col-sm-12 col-md-6">
              <div className="image">
                <img src={aboutImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
