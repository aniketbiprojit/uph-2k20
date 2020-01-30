import React, { Component } from 'react';
import themeImage from '../assets/Theme.png';
import '../styles/Theme.scss';
class Theme extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<section className='Common Theme' id="theme">
					<div className='inner'>
						<div className='content row'>
							<div className='art col-sm-12 col-md-6'>
								<div className='imageTheme'>
									<img
										className='imageSize'
										src={themeImage}
										alt=''
									/>
								</div>
							</div>
							<div className='text col-sm-12 col-md-6'>
								<div className='heading link--kukuri themeHeading'>
									Theme
								</div>
								<div className='textMore'>
									An amalgamation of dream and reality.
									Inspired by a movement epitomized by
									Salvadore Dalí, where pieces were created in
									a dream-like fashion to show the inner
									workings of the unconscious mind. A
									projection of the superior qualities of the
									liberated, irrational unconscious mind.
									<br />
									<br />A psychic automatism in its pure
									state, by which one proposes to express the
									actual functioning of thought…in the absence
									of any control exercised by reason, exempt
									from any aesthetic or moral concern.
									<br />
									<br />
									Presenting to you the theme of Uphoria 2019
									– ‘Surrealism’
								</div>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Theme;
