import React from 'react';

var Main = React.createClass({
	render: function () {
		console.log(this.props)
		return (
			<div>
				Hello from Main!
			</div>
		)
	}
});

module.exports = Main;