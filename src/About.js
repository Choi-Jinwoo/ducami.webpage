import React, { Component } from 'react';
import models from './models/index';
import './index.css'

class App extends Component {
	state = {
		name: localStorage.getItem('name'),
		email: localStorage.getItem('email'),
		school: localStorage.getItem('school'),
		habbit: localStorage.getItem('habbit'),
		intro: localStorage.getItem('intro'),
		age: localStorage.getItem('age'),
		color: localStorage.getItem('color')
	}
	render() {
		document.body.style.backgroundColor = this.state.color;
		document.body.style.color = this.state.color;

		return (
			<models.Profile
				name={this.state.name}
				school={this.state.school}
				habbit={this.state.habbit}
				age={this.state.age}
				email={this.state.email}
				intro={this.state.intro}
			/>
		);
	}
}

export default App;