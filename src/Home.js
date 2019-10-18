import React, { Component } from 'react';
import models from './models/index';
import './index.css'

class App extends Component {
	state = {
		title: "DUCAMI",
		subTitle: "DUCAMI와 함께하는 자기소개 웹페이지 제작하기",
	};

	render() {
		return (
			<div className="App">
				<models.TopBar
					topBar={this.state.title}
				/>
				<models.Title
					title={this.state.title}
				/>
				<models.SubTitle
					subTitle={this.state.subTitle}
				/>
				<models.InputText
					id="name"
					viewText="이름을 입력하세요"
				/>
				<models.InputText
					id="email"
					viewText="이메일을 입력하세요"
				/>
				<models.noticeText
					viewText="이메일로 자기소개페이지가 전송됩니다!"
				/>
				<models.InputText
					id="school"
					viewText="학교를 입력하세요"
				/>
				<models.InputText
					id="habbit"
					viewText="취미, 특기"
				/>
				<models.InputNumber
					id="age"
					viewText="나이"
				/>
				<models.InputTextArea
					id="intro"
					viewText="자기소개를 해주세요!"
				/>
				<models.colorPicker />
				<models.Button
					id="nextBtn"
					class="nextBtn"
					viewText="제작!"
				/>

			</div>
		);
	}
}

export default App;