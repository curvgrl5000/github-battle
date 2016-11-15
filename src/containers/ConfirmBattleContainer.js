var React = require('react');
var ConfirmBattle = require("../components/ConfirmBattle");

var ConfirmBattleContainer = React.createClass ({
	render: function() {
		return (
			<ConfirmBattle 
			isLoading={this.state.isLoading}
			playersInfo={this.state.playersInfo}
			/>
		)
	}

})

module.exports = ConfirmBattleContainer;