import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../images/logo.svg';
import './Home.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		}
	}	

	static contextTypes = {
        router: React.PropTypes.object
    }

	handleInput = (e) =>{
		this.setState({
			name: e.target.value
		});
	}
	nameConfirm = () => {
		this.context.router.push({
            pathname: '/levelselector',
			state: { name: this.state.name }
        })
	}

	render() {
		return (
		<div className="App">
			<div className="App-header">
			<img src= 'https://s-media-cache-ak0.pinimg.com/originals/9d/86/ab/9d86ab26bc61bc94bf09d352edff07a1.png' className="App-logo" alt="logo" />
			<h2 className="title">Welcome to Identify It</h2>
			</div>
			<br/>
			<p className="App-general-text">
				A platform used to test reading compreshension and oral speaking skills
				for kids of different skill levels. <br/> <br/>Simply read the word on the screen
				and talk into your microphone and recieve the results of the test at end. It's that easy!
			</p>
			<br/> <br/> <br/>
			<p className="App-intro"> Let's get to know each other! </p>
			<input type="text" name="name" placeholder=" your name here" autoComplete="off" onChange={this.handleInput} id="name-input"/>
			<div id="nameSubmit" onClick={this.nameConfirm}>Next</div>
		</div>
		);
	}
}

export default Home;
