import React, { Component } from 'react';

class InputText extends Component {
	render() {
		return (
			<input type="number" id={this.props.id} placeholder={this.props.viewText} name="data"></input>
		)
	}
}

export default InputText;