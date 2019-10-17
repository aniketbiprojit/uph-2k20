import React, { Component } from 'react'
import Upper from './Upper'
import About from './About'

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Upper />
				<About />
			</React.Fragment>
		)
	}
}

export default App
