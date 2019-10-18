import React, { Component } from 'react';

class SubTitle extends Component {
	render() {
		return (
			<div className="subTitle">
				{this.props.subTitle}
			</div>
		)
	}
}

export default SubTitle;