import React from 'react';
var transparentBg = require('../').transparentBg;

var PromptContainer = React.createClass({
	getInitialState: function () {
		return {
			username: ''
		}
	},
	onUpdateUser: function(e) {
		this.setState({
			username: e.target.value
		})
	},
	
	render: function () {
		return (
			<div className="jumbotron col-sm-6 col-sm-offset-3 text-center transparentBg">
				<h1>{this.props.route.header}</h1>
				<div className="col-sm-12">
					<form>
						<div className="form-group">
							<input
								className="form-control"
								placeholder="Github Username"
								onChange={this.onUpdateUser}
								value={this.state.username}
								type="text" />
						</div>
						<div className="form-group col-sm-4 col-sm-offset-4">
								<button
									className="btn btn-block btn-success"
									type="submit">
										Continue
								</button>	
						</div>
					</form>
				</div>
			</div>
		)
	}
});

module.exports = PromptContainer;