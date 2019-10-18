import React, { Component } from 'react';

class InputTextArea extends Component {
	render() {
		return (
			<div className="noticeText">
				{this.props.viewText}
			</div>
		)
	}
}

export default InputTextArea;