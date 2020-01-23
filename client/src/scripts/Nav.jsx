import React, { Component } from 'react';
import '../styles/Nav.scss';
export default class Nav extends Component {
	render() {
		return (
			<div className='nav'>
				<div className='inner1 row'>
					<div className='left col-6'>
						<div className='text'>
							<p className='inner'>
								UPHORIA
								<br />
								2020
							</p>
						</div>
					</div>
					<div className='right  col-6'>
						<nav className='row'>
							<div className='elem col-2'></div>
							<div className='elem col-2'>
								<p className='text'> About Us</p>
							</div>
							<div className='elem col-2'>
								<p className='text'> Theme</p>
							</div>
							<div className='elem col-2'>
								<p className='text'> Sponsors</p>
							</div>
							<div className='elem col-2'>
								<p className='text'> Events</p>
							</div>
							<div className='elem col-2 '>
								{/* <a
									href='https://www.google.com'
									className='register'
								> */}
								<p className='text'>
									<a href='https://www.google.com'>
										{' '}
										Register
									</a>
								</p>
								{/* </a> */}
							</div>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}
