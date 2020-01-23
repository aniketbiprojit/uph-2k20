import React, { Component } from 'react';
import './vendor/mdi-font/css/material-design-iconic-font.min.css';
import './vendor/font-awesome-4.7/css/font-awesome.min.css';
import './vendor/select2/select2.min.css';
import './vendor/datepicker/daterangepicker.css';
import './css/main.css';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

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
		super();
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	changeCaptcha(e){
		console.log(e)
		this.setState({'g-recaptcha-response':e})
	}
	handleChange(event) {
		console.log(event.target.name);
		this.setState({ [event.target.name]: event.target.value });
		console.log(this.state);
	}
	async handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
		const data = await axios.post(
			'http://localhost:8080/register',
			this.state
		);
		console.log(data);
	}

	render() {
		return (
			<div class='page-wrapper mainForm bg-white card1 p-t-80 p-b-80'>
				<div class='wrapper wrapper--w780'>
					<div class='card card-3'>
						<div class='card-heading'></div>
						<div class='card-body'>
							<h2 class='title'>Registration Info</h2>
							<form method='POST' onSubmit={this.handleSubmit}>
								<div class='input-group'>
									<input
										class='input--style-3'
										type='text'
										placeholder='Name'
										name='name'
										value={this.state.name}
										onChange={event =>
											this.handleChange(event)
										}
									/>
								</div>
								<div class='input-group'>
									<input
										class='input--style-3'
										type='text'
										placeholder='Institution Name'
										name='institute'
										value={this.state.institute}
										onChange={event =>
											this.handleChange(event)
										}
									/>
								</div>
								<div class='input-group'>
									<input
										class='input--style-3'
										type='number'
										placeholder='Contact Number'
										name='mobile'
										value={this.state.mobile}
										onChange={event =>
											this.handleChange(event)
										}
									/>
								</div>
								<div class='input-group'>
									<input
										class='input--style-3'
										type='email'
										placeholder='Email Address'
										name='email'
										onChange={event =>
											this.handleChange(event)
										}
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
										onChange={event =>
											this.handleChange(event)
										}
									/>
								</div>
								<ReCAPTCHA
									sitekey='6LeQD84UAAAAADuFNXidqZRUpfxFqPeRZLm9StEZ'
									value='g-recaptcha-response'
									onChange={event => this.changeCaptcha(event)}
								/>
								<div class='p-t-10'>
									<button
										class='btn btn--pill btn--green'
										type='submit'
									>
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
