import React, { Component } from 'react'
import aboutImg from '../assets/about.png'
export default class About extends Component {
	render() {
		return (
			<section className="Common About ">
				<div className="inner">
					<div className="content row">
					<div className="imagePhone">
								<img className="imageSize" src={aboutImg} alt="" />
							</div>
						<div className="text col-sm-12 col-md-6">
							<div className="heading">About US</div>
							<div className="textMore">
								A posuere scelerisque gravida facilisi
								parturient magna urna donec parturient per augue
								a amet quam nullam a ad a. Parturient velit
								imperdiet in suspendisse eget a parturient
								adipiscing penatibus convallis himenaeos felis
								torquent facilisi elementum a penatibus suscipit
								aliquam.
								<br />
								<br />
								Porta at at suspendisse dolor fames ullamcorper
								cum id per suspendisse a dignissim eu dapibus
								platea turpis augue mi proin lorem morbi sapien
								facilisis lectus.
							</div>
						</div>
						<div className="art col-sm-12 col-md-6">
							<div className="image">
								<img src={aboutImg} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}