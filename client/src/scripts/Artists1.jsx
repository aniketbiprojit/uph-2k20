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
                      Aakash Gupta also known as Sky Gupta is a Delhi-based
                      Stand-up comedian, Actor, Writer and Metro traveler. His
                      acts are completely in Hindi and it’s hilarious,
                      <em>
                        {' '}
                        toh apne ander ke nationalist ko khul kar hasne ka
                        chance dijiye.
                      </em>
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
                      His acts are completely in Hindi and it’s hilarious,
                      Aakash Gupta also known as Sky Gupta is a Delhi-based
                      Stand-up comedian, Actor, Writer and Metro traveler.{' '}
                      <em>
                        {' '}
                        toh apne ander ke nationalist ko khul kar hasne ka
                        chance dijiye.
                      </em>
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
