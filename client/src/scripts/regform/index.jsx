import React, { Component } from 'react'
import './vendor/mdi-font/css/material-design-iconic-font.min.css'
import './vendor/font-awesome-4.7/css/font-awesome.min.css'
import './vendor/select2/select2.min.css'
import './vendor/datepicker/daterangepicker.css'
import './css/main.css'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'

// function handleSubmit(event) {
//   event.preventDefault();
//   const data = new FormData(event.target);

//   fetch('url daal chutiye', {
//     method: 'POST',
//     body: data
//   });
//   console.log(this.state);
// }
class Form extends Component {
  constructor() {
    super()
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    let cardpost = document.getElementById('cardk')
    console.log(cardpost)

    cardpost.style.visibility = 'hidden'
    cardpost.style.display = 'none'
  }
  changeCaptcha(e) {
    this.setState({ 'g-recaptcha-response': e })
  }
  handleChange(event) {
    // console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value })
  }
  async handleSubmit(e) {
    e.preventDefault()
    const data = await axios.post('http://localhost:8080/register', this.state)
    if (data.status === 200) {
      const page = document.getElementById('cardk-1')
      const cardpost = document.getElementById('cardk')
      cardpost.style.visibility = 'visible'
	  cardpost.style.display = 'block'
	  page.style.visibility = 'hidden'
	  page.style.display = 'none'
  
      console.log('okay')
    } else {
    }
  }

  render() {
    return (
      <div className='page-wrapper mainForm bg-white card1 p-t-80 p-b-80'>
        <div className='wrapper wrapper--w780'>
          <div className='card card-3'>
            <div className='card-heading'></div>
            <div class='card-body' id='cardk-1'>
              <h2 class='title'>Registration Info</h2>
              <form method='POST' onSubmit={this.handleSubmit}>
                <div class='input-group'>
                  <input
                    class='input--style-3'
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                  />
                </div>
                <div class='input-group'>
                  <input
                    class='input--style-3'
                    type='text'
                    placeholder='Institution Name'
                    name='institute'
                    value={this.state.institute}
                    onChange={event => this.handleChange(event)}
                  />
                </div>
                <div class='input-group'>
                  <input
                    class='input--style-3'
                    type='number'
                    placeholder='Contact Number'
                    name='mobile'
                    value={this.state.mobile}
                    onChange={event => this.handleChange(event)}
                  />
                </div>
                <div class='input-group'>
                  <input
                    class='input--style-3'
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    onChange={event => this.handleChange(event)}
                    value={this.state.email}
                  />
                </div>
                <div class='input-group'>
                  <input
                    class='input--style-3'
                    type='number'
                    placeholder='Emergency Contact'
                    name='emergency'
                    vaule={this.state.emergency}
                    onChange={event => this.handleChange(event)}
                  />
                </div>
                <ReCAPTCHA
                  sitekey='6LeQD84UAAAAADuFNXidqZRUpfxFqPeRZLm9StEZ'
                  value='g-recaptcha-response'
                  className='g-recaptcha'
                  onChange={event => this.changeCaptcha(event)}
                />
                <div class='p-t-10'>
                  <button class='btn btn--pill btn--green' type='submit'>
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className='card-body card-body2' id='cardk'>
              <div className='cardSubmit'>
                <div className='cardSubmitText'>
                  <h2>
                    Thanks for Registering with us,
                    <br />
                  </h2>
                  <p>
                    Go to <a href='main ki link'>HomePage</a>{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Form
