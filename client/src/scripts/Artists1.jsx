import React, { Component } from "react";
import "../styles/Artists1.scss";
import artistImage from "../assets/2.png";
import artistImage1 from "../assets/3.png";


class Artists1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* artist 1 */}
        <div className="Artists1 onPc">
          <span className="heading">Artists</span>
          <div className="row  Artists1_Grid">
            <div className="col-sm-12 col-md-6">
              <div className="Artists1_text">
                <br />
                <div className="aboutArtist">
                  <span className="text">Naam HaiLamba</span>
                  <br />
                  <div className="textAboutDiv">
                    <span className="textAbout">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci quisquam tempore quia facilis eveniet earum aut
                      veritatis, amet nulla quasi, rem quos consequuntur nihil
                      maiores. Quaerat culpa repellendus aut ad.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 imageArtistDiv">
              <img src={artistImage} className="imageArtist" alt="" />
            </div>
          </div>
        </div>
        <div className="Artists1 onPhone">
          <span className="heading">Artists</span>

          <div className="row  Artists1_Grid">
            <div className="col-sm-12 col-md-6 imageArtistDiv">
              <img src={artistImage} className="imageArtist" alt="" />
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="Artists1_text">
                <br />
                <div className="aboutArtist">
                  <span className="text">Naam HaiLamba</span>
                  <br />
                  <div className="textAboutDiv">
                    <span className="textAbout">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci quisquam tempore quia facilis eveniet earum aut
                      veritatis, amet nulla quasi, rem quos consequuntur nihil
                      maiores. Quaerat culpa repellendus aut ad.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* artist 2 */}
        <div className="Artists1 onPc ">
          <div className="row  Artists1_Grid">
            <div className="col-sm-12 col-md-6 imageArtistDiv">
              <img src={artistImage1} className="imageArtist" alt="" />
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="Artists1_text">
                <br />
                <div className="aboutArtist">
                  <span className="text">Naam HaiLamba</span>
                  <br />
                  <div className="textAboutDiv">
                    <span className="textAbout">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci quisquam tempore quia facilis eveniet earum aut
                      veritatis, amet nulla quasi, rem quos consequuntur nihil
                      maiores. Quaerat culpa repellendus aut ad.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Artists1 onPhone">
          <div className="row  Artists1_Grid">
            <div className="col-sm-12 col-md-6 imageArtistDiv">
              <img src={artistImage} className="imageArtist" alt="" />
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="Artists1_text">
                <br />
                <div className="aboutArtist">
                  <span className="text">Naam HaiLamba</span>
                  <br />
                  <div className="textAboutDiv">
                    <span className="textAbout">
                      maiores. Quaerat culpa repellendus aut ad. maiores.
                      Quaerat culpa repellendus aut ad.                      maiores. Quaerat culpa repellendus aut ad.                      maiores. Quaerat culpa repellendus aut ad.                      maiores. Quaerat culpa repellendus aut ad.                      maiores. Quaerat culpa repellendus aut ad.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* artist 3 */}

        <div className="Artists1 onPc">
          <div className="row  Artists1_Grid">
            <div className="col-sm-12 col-md-6">
              <div className="Artists1_text">
                <br />
                <div className="aboutArtist">
                  <span className="text">Naam HaiLamba</span>
                  <br />
                  <div className="textAboutDiv">
                    <span className="textAbout">
                      , rem quos consequuntur nihil, rem quos consequuntur nihil, rem quos consequuntur nihil, rem quos consequuntur nihil, rem quos consequuntur nihil, rem quos consequuntur nihil
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 imageArtistDiv">
              <img src={artistImage} className="imageArtist1" alt="" />
            </div>
          </div>
        </div>
        <div className="Artists1 onPhone">
          <div className="row  Artists1_Grid">
            <div className="col-sm-12 col-md-6 imageArtistDiv">
              <img src={artistImage} className="imageArtist" alt="" />
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="Artists1_text">
                <br />
                <div className="aboutArtist">
                  <span className="text">Naam HaiLamba</span>
                  <br />
                  <div className="textAboutDiv">
                    <span className="textAbout">
                      maiores. Quaerat culpa repellendus aut ad. maiores.
                      Quaerat culpa repellendus aut ad.                      maiores. Quaerat culpa repellendus aut ad.                      maiores. Quaerat culpa repellendus aut ad.                      maiores. Quaerat culpa repellendus aut ad.                      maiores. Quaerat culpa repellendus aut ad.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Artists1;
