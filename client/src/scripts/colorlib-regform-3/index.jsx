import React, { Component } from 'react';
import './vendor/mdi-font/css/material-design-iconic-font.min.css';
import './vendor/font-awesome-4.7/css/font-awesome.min.css';
import './vendor/select2/select2.min.css';
import './vendor/datepicker/daterangepicker.css';
import './css/main.css';

import ReCAPTCHA from 'react-google-recaptcha';

function onChange(value) {
  console.log('Captcha value:', value);
}
function handleChange(event) {
  this.setState(([event.target.name] = event.target.value));
}
function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch('url daal chutiye', {
    method: 'POST',
    body: data
  });
}
class Form extends Component {
  constructor() {
    this.state = {
      name: ' ',
      email: ' ',
      institution: ' ',
      email: ' ',
      Econtact: ' '
    };
  }

  render() {
    return (
      <div class="page-wrapper mainForm bg-white card1 p-t-80 p-b-80 font-poppins">
        <div class="wrapper wrapper--w780">
          <div class="card card-3">
            <div class="card-heading"></div>
            <div class="card-body">
              <h2 class="title">Registration Info</h2>
              <form method="POST">
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={event => this.handleChange(event)}
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="Institution Name"
                    name="institution"
                    onChange={event => this.handleChange(event)}
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="number"
                    placeholder="Contact Number"
                    name="contact"
                    onChange={event => this.handleChange(event)}
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    onChange={event => this.handleChange(event)}
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="number"
                    placeholder="Emergency Contact"
                    name="Econtact"
                    onChange={event => this.handleChange(event)}
                  />
                </div>
                <ReCAPTCHA
                  sitekey="6LeQD84UAAAAADuFNXidqZRUpfxFqPeRZLm9StEZ"
                  onChange={onChange}
                />
                <div class="p-t-10">
                  <button class="btn btn--pill btn--green" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
