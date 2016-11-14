import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './config/routes';

ReactDOM.render(
	// <HelloWorld name="Tyler" />,  // works with HelloWorld
	// < Avatar user={USER_DATA} />, // works with Avatar, and everything between the stars
	routes,
	document.getElementById('root')
);
