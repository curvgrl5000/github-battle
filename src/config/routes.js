import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main} />
		<Route path='/home' component={Home} />
	</Router>
);


module.exports = routes;

