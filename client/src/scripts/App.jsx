import React, { Component } from 'react'
import Upper from './Upper'
import About from './About'
import Theme from './Theme'

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Upper />
				<About />
				<Theme />
			</React.Fragment>
		)
	}
}

export default App
