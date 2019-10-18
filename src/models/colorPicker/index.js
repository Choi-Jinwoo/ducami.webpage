import React, { Component } from 'react';

class colorPicker extends Component {
	render() {
		return (
			<div className="colorPicker">
				<button className className="colorPink" onClick={pinkClicked}></button>
				<button className className="colorBlue" onClick={blueClicked}></button>
				<button className className="colorGreen" onClick={greenClicked}></button>
			</div>
		)
	}
}

function pinkClicked() {
	document.getElementById('nextBtn').style.color = "#FFCCCC"
	document.body.style.backgroundColor = "#FFCCCC"
	document.getElementById('nextBtn').style.backgroundColor = "#ffffff"
}

function blueClicked() {
	document.getElementById('nextBtn').style.color = "#CCD1FF"
	document.body.style.backgroundColor = "#CCD1FF"
	document.getElementById('nextBtn').style.backgroundColor = "#ffffff"
}

function greenClicked() {
	document.getElementById('nextBtn').style.color = "#A9E2C5"
	document.body.style.backgroundColor = "#A9E2C5"
	document.getElementById('nextBtn').style.backgroundColor = "#ffffff"
}


export default colorPicker;