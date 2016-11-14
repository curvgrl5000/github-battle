import React from 'react';
import { Router, Route } from 'react-router';
//var ReactRouter = require('react-router');

var Main = require('./components/Main');
var Home = require('./components/Home');

var routes = (
	<Router>
		<Route path='/' component={Main}>
			<Route path='/home' component={Home} />
		</Route>
	</Router>
);


module.exports = routes;

