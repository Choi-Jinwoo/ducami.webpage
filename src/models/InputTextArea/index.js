import React, { Component } from 'react';

class InputTextArea extends Component {
	render() {
		return (
			<div className="introForm">
				<textarea id={this.props.id} placeholder={this.props.viewText} rows="10" cols="71" name="data"></textarea>
			</div>
		)
	}
}

export default InputTextArea;