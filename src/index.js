import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var USER_DATA = {
	name: 'PinkyBoy McGinnis',
	username: 'tylermcginnis',
	image: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
}

/*
	Focused
	Independent
	Reusable
	Small
	Testable
*/

// var HelloWorld = React.createClass({
// 	render: function () {
// 		return (
// 				<h2>Hello {this.props.name}!</h2>
// 		)
// 	}
// });


var ProfilePic = React.createClass({
	render: function () {
		return <img src={this.props.imageUrl} style={{height: 100, width:100}} />
	}
});

var ProfileLink = React.createClass({
	render: function () {
		return (
			<div>
				<a href={'https://www.github.com/' + this.props.username}>
				  {this.props.username}
				</a>  
			</div>
		)
	}
});

var ProfileName = React.createClass({
	render: function () {
		return (
			<div>{this.props.name}</div>
		)
	}
});

var Avatar = React.createClass({
	render: function() {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>	
		)
	}
});

ReactDOM.render(
	//<HelloWorld name="Tyler" />,  // works with HelloWorld
	< Avatar user={USER_DATA} />,
	document.getElementById('root')
)
























