var React = require('react');
var ConfirmBattle = require("../components/ConfirmBattle");
var gitHubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		console.log('getInitialState');
		return {
			isLoading: true,
			playersInfo: []
		}
	},
	componentWillMount: function () {
		console.log('componentWillMount');
	},
	componentDidMount: function () {
		var query = this.props.location.query;
		gitHubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
		  .then(function (players) {
		  	this.setState({
		  		isLoading: false,
		  		playersInfo: [players[0], players[1]]
		  	})
		  	// console.log('PLAYERS', players)
		  }.bind(this))
		//console.log('componentDidMount')
		//fetch info from github then update state
	},
	componentWillRecievProps: function () {
		console.log('componentWillRecievProps');
	},
		componentWillUnmount: function () {
		console.log('componentWillUnmount');
	},
	render: function() {
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo} />
		)
	}
})

module.exports = ConfirmBattleContainer;