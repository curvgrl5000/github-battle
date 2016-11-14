import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

var HelloWorld = React.createClass({
	render: function () {
		return (
				<h2>Hello World!</h2>
		)
	}
});

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('root')
)