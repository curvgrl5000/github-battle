var React = require('react');
var PropTypes = React.PropTypes;
// var transparentBg = require('../styles').transparentBg;

function Prompt(props) {
	return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center transparentBg">
        <h1>{props.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={props.onSubmitUser}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={props.username}
                onChange={props.onUpdateUser}
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

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.fun.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt;
