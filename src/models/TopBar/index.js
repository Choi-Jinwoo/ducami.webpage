import React, { Component } from 'react';

class TopBar extends Component {
	render() {
		return (
			<div className="topBar">
				{this.props.topBar}
			</div>
		)
	}
}

export default TopBar;