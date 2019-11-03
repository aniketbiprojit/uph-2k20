import React, { Component } from 'react'
import Nav from './Nav'
import upper from "../assets/uph.png"
import upper1 from "../assets/uph1.png"
import upper3 from "../assets/uph-3.png"
import upper4 from "../assets/uph-4.png"


export default class Upper extends Component {
	render() {
		return (
			<section className="main Upper">
				<Nav />
				<div className="dabba">
				
					<div className="inner row">
						<div className="dabbaUpper onPc">
						<img className="imageUpper" src={upper} alt=""/>

						</div>
						<div className="dabbaUpper1 onPhone">
						<img className="imageUpper1" src={upper4} alt=""/>

						</div>
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
