import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './config/routes';

ReactDOM.render(
	routes,
	document.getElementById('root')
);

var styles = {
	transparentBg: {
		background: 'transparent'
	}
}

module.exports = styles;


