var React = require('react');
// var transparentBg = require('../styles').transparentBg;

// function Prompt(props) {
// 	return (
		

// 		)
// };


var Prompt = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center transparentBg">
        <h1>{this.props.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.props.onSubmitUser}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.props.username}
                onChange={this.props.onUpdateUser}
                placeholder="Github Username"/>
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
})

module.exports = Prompt;
