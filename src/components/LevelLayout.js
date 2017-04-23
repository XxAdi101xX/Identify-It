import React, { Component } from 'react';
import './Level.css'
/* global  webkitSpeechRecognition webkitSpeechGrammarList webkitSpeechRecognitionEvent*/
class LevelLayout extends Component {
	// check if word is empty string to reinitiate for word
	render() {
		const SpeechRecognition = webkitSpeechRecognition;
		const SpeechGrammarList = webkitSpeechGrammarList
		const SpeechRecognitionEvent = webkitSpeechRecognitionEvent
		const recognition = new SpeechRecognition();
		
		// move colours to constants page
		//const colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral'];
		const colors = ['a', 'b', 'c', 'ay'];
		const grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
		const speechRecognitionList = new SpeechGrammarList();
		speechRecognitionList.addFromString(grammar, 1);
		recognition.grammars = speechRecognitionList;
		
		recognition.lang = 'en-US';
		recognition.continuous = false;
		recognition.interimResults = false;
		recognition.maxAlternatives = 1;
	
		const beginRecognition = () => {
			recognition.start();
		}

		recognition.onresult = (event) => {
			let last = event.results.length - 1;
			let word = event.results[last][0].transcript.toLocaleLowerCase();
			// updating the state with the new word
			this.props.guessedWord(word);
		}
		
		recognition.onspeechend = () => {
			recognition.stop();
			console.log('speechend');
			// change state here to see if work was actually heard
		}

		recognition.onnomatch = () => {
			console.log('no match');
		}
		
		recognition.onerror = (event) => {
			console.log( 'Error occurred in recognition: ' + event.error);
		}
		// have a story where you collect things by correctly pronouncing the words
		// then it congratulates you and tells you how well you did, also have a link
		// with the complete results
		return (			
			<div id="level-container">
				<br/>
				<div id="level-index">{this.props.index}</div>
				<div id="target-word">{this.props.target}</div>
				<div onClick={beginRecognition} id="start-recognition">Press me</div>
			</div>
		);
	}
}

LevelLayout.propTypes = {
	guessedWord: React.PropTypes.func.isRequired,
	index: React.PropTypes.number.isRequired,
	target: React.PropTypes.string.isRequired
}

export default LevelLayout;

