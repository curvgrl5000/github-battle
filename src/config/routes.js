import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

//var ReactRouter = require('react-router');
// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main} />
		<Route path='/home' component={Home} />
	</Router>
);


module.exports = routes;

