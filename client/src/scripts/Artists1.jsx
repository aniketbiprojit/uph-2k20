import React, { Component } from 'react'
import '../styles/Artists1.scss'
// import ritviz from '../assets/2.png';
import ritviz from '../assets/ritviz.png'
import bassi from '../assets/bassi.png'
import yellowDiaries from '../assets/yellow-diaries.png'

class Artists1 extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        {/* artist 1 */}
        <div className='Artists1 onPc' id='artists'>
          <span className='heading link--kukuri'>Artists</span>
          <div className='row  Artists1_Grid'>
            <div className='col-sm-12 col-md-6'>
              <div className='Artists1_text'>
                <br />
                <div className='aboutArtist'>
                  <span className='text'>DJ NYK</span>
                  <br />
                  <div className='textAboutDiv'>
                    <span className='textAbout'>
                      DJ / Producer / Radio Host / Visual Artist & Coach, NYK,
                      aka Nikhil Sahni is a unique artist who has successfully
                      brought together two seemingly disparate worlds. He is the
                      man responsible for making audiences worldwide, wake up to
                      what could best be termed a two-fold amalgam, of Bollywood
                      beats and electronic dance music.{' '}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 imageArtistDiv'>
              <img src={ritviz} className='imageArtist' alt='' />
            </div>
          </div>
        </div>
        <div className='Artists1 onPhone'>
          <span className='heading'>Artists</span>

          <div className='row  Artists1_Grid'>
            <div className='col-sm-12 col-md-6 imageArtistDiv'>
              <img src={ritviz} className='imageArtist' alt='' />
            </div>
            <div className='col-sm-12 col-md-6'>
              <div className='Artists1_text'>
                <br />
                <div className='aboutArtist'>
                  <span className='text'>DJ NYK</span>
                  <br />
                  <div className='textAboutDiv'>
                    <span className='textAbout'>
                      DJ / Producer / Radio Host / Visual Artist & Coach, NYK,
                      aka Nikhil Sahni is a unique artist who has successfully
                      brought together two seemingly disparate worlds. He is the
                      man responsible for making audiences worldwide, wake up to
                      what could best be termed a two-fold amalgam, of Bollywood
                      beats and electronic dance music.{' '}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* artist 2 */}
        <div className='Artists1 onPc '>
          <div className='row  Artists1_Grid'>
            <div className='col-sm-12 col-md-6 imageArtistDiv'>
              <img src={yellowDiaries} className='imageArtist' alt='' />
            </div>
            <div className='col-sm-12 col-md-6'>
              <div className='Artists1_text'>
                <br />
                <div className='aboutArtist'>
                  <span className='text'>Akhil Sachdeva</span>
                  <br />
                  <div className='textAboutDiv'>
                    <span className='textAbout'>
                      Akhil Sachdeva is an Indian musician, singer and composer.
                      He is best known for his Bollywood debut Humsafar in
                      Badrinath ki Dulhaniya. His latest single "Tera Ban
                      Jaunga" was feature in Kabir Singh.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='Artists1 onPhone'>
          <div className='row  Artists1_Grid'>
            <div className='col-sm-12 col-md-6 imageArtistDiv'>
              <img src={yellowDiaries} className='imageArtist' alt='' />
            </div>
            <div className='col-sm-12 col-md-6'>
              <div className='Artists1_text'>
                <br />
                <div className='aboutArtist'>
                  <span className='text'>Akhil Sachdeva</span>
                  <br />
                  <div className='textAboutDiv'>
                    <span className='textAbout'>
                      Akhil Sachdeva is an Indian musician, singer and composer.
                      He is best known for his Bollywood debut Humsafar in
                      Badrinath ki Dulhaniya. His latest single "Tera Ban
                      Jaunga" was feature in Kabir Singh.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* artist 3 */}

        <div className='Artists1 onPc'>
          <div className='row  Artists1_Grid'>
            <div className='col-sm-12 col-md-6'>
              <div className='Artists1_text'>
                <br />
                <div className='aboutArtist'>
                  <span className='text'>Aakash Gupta</span>
                  <br />
                  <div className='textAboutDiv'>
                    <span className='textAbout'>
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
            <div className='col-sm-12 col-md-6 imageArtistDiv'>
              <img src={bassi} className='imageArtist' alt='' />
            </div>
          </div>
        </div>
        <div className='Artists1 onPhone'>
          <div className='row  Artists1_Grid'>
            <div className='col-sm-12 col-md-6 imageArtistDiv'>
              <img src={bassi} className='imageArtist' alt='' />
            </div>
            <div className='col-sm-12 col-md-6'>
              <div className='Artists1_text'>
                <br />
                <div className='aboutArtist'>
                  <span className='text'>Aakash Gupta</span>
                  <br />
                  <div className='textAboutDiv'>
                    <span className='textAbout'>
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
    )
  }
}

export default Artists1
