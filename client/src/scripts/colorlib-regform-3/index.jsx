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

class Form extends Component {
  state = {};
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
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="Institution Name"
                    name="institution"
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="number"
                    placeholder="Contact Number"
                    name="contact"
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="number"
                    placeholder="Emergency Contact"
                    name="Econtact"
                  />
                </div>
                <ReCAPTCHA sitekey="keydaalchutiye" onChange={onChange} />
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
