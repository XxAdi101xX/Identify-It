import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import App from './components/App'
import Home from './components/Home';
import LevelSelector from './components/LevelSelector';
import Level from './components/Level';
import EndScreen from './components/EndScreen';
import './general.css';

import { useRouterHistory } from 'react-router'
import { createHistory, useBeforeUnload } from 'history'

//const history = useRouterHistory(useBeforeUnload(createHistory))()

/*history.listenBeforeUnload(function () {
  return 'Are you sure you want to leave this pa?'
})*/

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />  
      <Route path="/levelselector" component={LevelSelector} />
      <Route path="/level" component={Level} />
      <Route path="/endscreen" component={EndScreen} />
    </Route>
  </Router>,
  document.getElementById('root')
);
// put multiple routes to the same level template but with different paths to indicate
// the different types of levels