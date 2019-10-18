import React, { Component } from 'react';

class colorPicker extends Component {

	render() {
		return (
			<button className={this.props.class} id={this.props.id} onClick={nextBtnClicked}>
				{this.props.viewText}
			</button>
		)
	}
}

function nextBtnClicked() {
	const data = document.getElementsByName('data');
	const name = data[0].value
	const email = data[1].value
	const school = data[2].value
	const habbit = data[3].value
	const intro = data[5].value
	const age = data[4].value

	localStorage.setItem('name', name);
	localStorage.setItem('email', email);
	localStorage.setItem('school', school);
	localStorage.setItem('habbit', habbit);
	localStorage.setItem('intro', intro);
	localStorage.setItem('age', age);
	localStorage.setItem('color', document.body.style.backgroundColor);
	window.location = './about';
}
export default colorPicker;