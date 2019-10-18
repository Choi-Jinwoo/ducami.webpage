import React, { Component } from 'react';
import './index.css';

class Profile extends Component {
	render() {
		return (
			<div className="profileContainer">
				<div className="subTitle">
					DUAMI와 함께하는 나만의 페이지
				</div>
				<div className="name">
					{this.props.name}
				</div>
				<div className="tags" id="tags">
					#{this.props.school}
					#{this.props.habbit}
					#{this.props.age}
				</div>
				<div className="tags" id="tags">
					{this.props.email}
				</div>
				<div className="intro">
					{this.props.intro}
				</div>
			</div>
		)
	}
}

export default Profile;