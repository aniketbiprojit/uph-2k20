import React, { Component } from 'react';
import '../styles/Artists1.scss';
// import ritviz from '../assets/2.png';
import ritviz from '../assets/ritviz.png';
import bassi from '../assets/bassi.png';
import yellowDiaries from '../assets/yellow-diaries.png';

class Artists1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* artist 1 */}
        <div className="Artists1 onPc">
          <span className="heading link--kukuri">Artists</span>
          <div className="row  Artists1_Grid">
            <div className="col-sm-12 col-md-6">
              <div className="Artists1_text">
                <br />
                <div className="aboutArtist">
                  <span className="text">Ritviz</span>
                  <br />
                  <div className="textAboutDiv">
                    <span className="textAbout">
                      An electronic music artist who garnered fame post his
                      Bacardi House Party hit ‘Udd Gaye’, Ritviz is known for
                      his dynamic and upbeat music. His talent manages to pull
                      large crowds, no matter where he goes. The music Ritviz
                      creates resonates with students across the spectrum.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 imageArtistDiv">
              <img src={ritviz} className="imageArtist" alt="" />
            </div>
          </div>
        </div>
        <div className="Artists1 onPhone">
          <span className="heading">Artists</span>

          <div className="row  Artists1_Grid">
            <div className="col-sm-12 col-md-6 imageArtistDiv">
              <img src={ritviz} className="imageArtist" alt="" />
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="Artists1_text">
                <br />
                <div className="aboutArtist">
                  <span className="text">Ritviz</span>
                  <br />
                  <div className="textAboutDiv">
                    <span className="textAbout">
                      An electronic music artist who garnered fame post his
                      Bacardi House Party hit ‘Udd Gaye’, Ritviz is known for
                      his dynamic and upbeat music. His talent manages to pull
                      large crowds, no matter where he goes. The music Ritviz
                      creates resonates with students across the spectrum.
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
              <img src={yellowDiaries} className="imageArtist" alt="" />
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="Artists1_text">
                <br />
                <div className="aboutArtist">
                  <span className="text">The Yellow Diaries</span>
                  <br />
                  <div className="textAboutDiv">
                    <span className="textAbout">
                      The Yellow Diary is an alternative rock band that stormed
                      the indie music scene with their very first song, ‘Marz’.
                      Describing their songs as ‘poetry with rock’, every piece
                      it touches the soul of their listeners. The hard-hitting
                      lyrics with a rock and electronic soundscape make their
                      music a rollercoaster of a ride.
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
              <img src={yellowDiaries} className="imageArtist" alt="" />
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="Artists1_text">
                <br />
                <div className="aboutArtist">
                  <span className="text">The Yellow Diaries</span>
                  <br />
                  <div className="textAboutDiv">
                    <span className="textAbout">
                      The Yellow Diary is an alternative rock band that stormed
                      the indie music scene with their very first song, ‘Marz’.
                      Describing their songs as ‘poetry with rock’, every piece
                      it touches the soul of their listeners. The hard-hitting
                      lyrics with a rock and electronic soundscape make their
                      music a rollercoaster of a ride.
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
                  <span className="text">Anubhav Singh Bassi</span>
                  <br />
                  <div className="textAboutDiv">
                    <span className="textAbout">
                      Lawyer turned entrepreneur turned stand-up comic. What
                      made him popular amongst the youth? His videos like
                      cheating and waxing. After breaking the internet, Bassi is
                      on the road to break hearts across India with his
                      painfully funny stand up ‘Bas Kar Bassi’. Chalta hai
                      comedy brings Anubhav Bassi to the biggest event of
                      Bennett University, ‘Uphoria’ for a hilarious evening.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 imageArtistDiv">
              <img src={bassi} className="imageArtist" alt="" />
            </div>
          </div>
        </div>
        <div className="Artists1 onPhone">
          <div className="row  Artists1_Grid">
            <div className="col-sm-12 col-md-6 imageArtistDiv">
              <img src={bassi} className="imageArtist" alt="" />
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="Artists1_text">
                <br />
                <div className="aboutArtist">
                  <span className="text">Anubhav Singh Bassi</span>
                  <br />
                  <div className="textAboutDiv">
                    <span className="textAbout">
                      Lawyer turned entrepreneur turned stand-up comic. What
                      made him popular amongst the youth? His videos like
                      cheating and waxing. After breaking the internet, Bassi is
                      on the road to break hearts across India with his
                      painfully funny stand up ‘Bas Kar Bassi’. Chalta hai
                      comedy brings Anubhav Bassi to the biggest event of
                      Bennett University, ‘Uphoria’ for a hilarious evening.
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
