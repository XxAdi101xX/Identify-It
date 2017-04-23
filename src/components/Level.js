import React, { Component } from 'react';
import * as WordBank from './constants/constants';
import LevelLayout from './LevelLayout';

class Level extends Component {
    // add super props
    constructor(props) {
        super(props);
        // select word bank here
        let wordBank = WordBank.colours; // default
        let levelType = 'colours';
        if (props.location.state.levelType !== undefined) {
            if (props.location.state.levelType === 'alphabet') {
                wordBank = WordBank.alphabets;
                levelType = 'alphabet';
            }
        }

        // randomize the selection of word
        const firstWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        // removing chosen word from work bank
        var toRemove = wordBank.indexOf(firstWord);
        if (toRemove > -1) {
            wordBank.splice(toRemove, 1);
        }
        this.state = {
            levelType,
            levelIndex: 1,
            wordList: wordBank,
            targetWord: firstWord,
            guessedWord: "",
            onSpeechEnd: false,
            results: []
        };
    }

    static contextTypes = {
        router: React.PropTypes.object
    }

    // using arrow sytax allows me to bind get word to where it's defined rather than
    // where it is called
    getWord = (word) => {
        let result;
        if (this.state.levelType !== 'alphabet') {
            result = (this.state.targetWord === word.toLocaleLowerCase() ? true : false)
        } else {
            result = (this.state.targetWord[0] === word[0] ? true : false);
        }
        const currentResult = {
            target: this.state.targetWord,
            guess: word,
            result
        };

        let resultsTemp = this.state.results;
        resultsTemp.push(currentResult);

         // randomly choosing word
        let wordBank = this.state.wordList;
        const newWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        // removing chosen word from work bank
        var toRemove = wordBank.indexOf(newWord);
        if (toRemove > -1) {
            wordBank.splice(toRemove, 1);
        }
        this.setState((prevState, props) => ({
            levelIndex: ++prevState.levelIndex,
            wordList: wordBank,
            targetWord: newWord,
            guessedWord: word,
            results: resultsTemp
        }));
        if (this.state.levelIndex === 4) {
            //browserHistory.push('/endscreen');
            this.context.router.push({
                pathname: '/endscreen',
                state: { results: this.state.results}
            })
        }
        console.log(this.state.guessedWord);
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <LevelLayout 
                    guessedWord={this.getWord}
                    index={this.state.levelIndex}
                    target={this.state.targetWord} />  
            </div>
        );
    }
}

export default Level;