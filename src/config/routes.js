/* eslint-disable */
import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');


var routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main} >
		  <IndexRoute component={Home} />
		  <Route path='playerOne' header='Player One' component={PromptContainer} />
		  <Route path='playerTwo/:playerOne' header='Player Two'component={PromptContainer} />
		  <Route path='battle' component={ConfirmBattleContainer} />
		</Route>  
	</Router>
);


module.exports = routes;

