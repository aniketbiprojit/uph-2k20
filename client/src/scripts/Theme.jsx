import React, { Component } from 'react';
import themeImage from '../assets/Theme.png';
import "../styles/Theme.scss";
class Theme extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            	<section className="Common Theme">
				<div className="inner">
					<div className="content row">
					<div className="art col-sm-12 col-md-6">
							<div className="imageTheme">
								<img className="imageSize" src={themeImage} alt="" />
							</div>
						</div>
						<div className="text col-sm-12 col-md-6">
							<div className="heading">Theme</div>
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
						
					</div>
				</div>
			</section>


        </React.Fragment> );
    }
}
 
export default Theme;