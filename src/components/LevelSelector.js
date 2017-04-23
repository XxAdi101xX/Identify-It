import React, { Component } from 'react';
import { Link } from 'react-router';
import './LevelSelector.css';

class LevelSelector extends Component {
    constructor(props) {
        super(props);
        let name = '';        
        if (props.location.state != undefined) {
            name = ' ' + props.location.state.name
        }
        this.state = {
            name
        }
    }

    static contextTypes = {
        router: React.PropTypes.object
    }

    levelNav = (levelType) => {
        this.context.router.push({
            pathname: '/level',
            state: { levelType}
        })
    }

    render () {
        return (
            <div id="level-selector-container">
                <br/><br/><br/>
                <h1>Ready to play{this.state.name}?</h1>
                <p className="App-general-text">Choose a level of your liking to get started</p>
                <br/>
                <div className="level-info">
                    <div className="level" onClick={() => this.levelNav('alphabet')}>Alphabet Match</div>
                    <div className="level" onClick={() => this.levelNav('colours')}>Word Match</div>
                </div>
                <div className="level-info">
                    <div className="level-description">
                        Say a word that starts with the letter displayed.
                    </div>
                    <div className="level-description">
                        Say the word that appears on the screen.
                    </div>

                </div>
            </div>
        );
    }
}

export default LevelSelector;