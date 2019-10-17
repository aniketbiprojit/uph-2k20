import React, { Component } from 'react'
import Nav from './Nav'

export default class Upper extends Component {
	render() {
		return (
			<section className="main Upper">
				<Nav />
				<div className="dabba">
					<div className="inner row">
						<div className="scroll col-6">
							<div className="inner">
								<p className="text">
									Scroll down <br /> to know more
								</p>
							</div>
						</div>
						<div className="dates  col-6">
							<div className="light">
								Bennett University's <br /> Cultural Fest{' '}
							</div>
							{/* <br/> */}
							<div className="heavy">
								{' '}
								<div className="up">03-04</div> FEB{' '}
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
