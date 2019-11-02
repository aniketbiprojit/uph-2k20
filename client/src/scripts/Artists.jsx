import React, { Component } from "react";
import "../styles/Artists.scss";
import artist from "../assets/artist.png";
import ClientSlider from "./ClientSlider";
class Artists extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="outer_Artists ">
        
          <div className="inner">
            <span className="heading">Artists</span>
          </div>
          <div className="onPhone">
          <ClientSlider />
        </div>
          <br />
          <div className="onPC">
            <div className="row">
              <div className="col-sm-6 col-md-4 ArtistDabba">
                <p>
                  <img className="ArtistImage" src={artist} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-4 ArtistDabba">
                <p>
                  <img className="ArtistImage" src={artist} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-4 ArtistDabba">
                <p>
                  <img className="ArtistImage" src={artist} alt="" />
                </p>
              </div>
             
            </div>
            
            <div className="row">
             
              <div className="col-sm-6 col-md-4 ArtistDabba">
                <p>
                  <img className="ArtistImage" src={artist} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-4 ArtistDabba">
                <p>
                  <img className="ArtistImage" src={artist} alt="" />
                </p>
              </div>
              <div className="col-sm-6 col-md-4 ArtistDabba">
                <p>
                  <img className="ArtistImage" src={artist} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </React.Fragment>
    );
  }
}

export default Artists;
