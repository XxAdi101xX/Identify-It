import React, {Component} from 'react';
import { Link } from 'react-router';
import './EndScreen.css';

class EndScreen extends Component {
    render() {
        const resultCells = () => {
            const results = this.props.location.state.results;
            let cells = [];
            let correct = 0;
            const total = results.length;
            for (let i = 0; i < total; ++i) {
                if (results[i].result === true) { ++correct }
                cells.push( <tr key={i}><td>{i+1}</td><td>{results[i].target}</td><td>{results[i].guess}</td></tr>);
            }
            return {cells, correct, total};
        }

        let { cells, correct, total } = resultCells();

        return (
            <div id="end-screen-container">
            <br/>
                <div className="title">Results</div> <br/>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Target Word</th>
                            <th>Guessed Word</th>
                        </tr>
                    </thead>
                    <tbody>                        
                        {cells}                        
                    </tbody>
                </table>
                <br/>
                <div>You've gotten {correct} out of {total} correct.</div>
                <br/>
                <Link to='/levelselector'>
                    <div className="level" id="level-selection-nav">Level Menu</div>
                </Link>
            </div>
        );
    }
}

export default EndScreen;