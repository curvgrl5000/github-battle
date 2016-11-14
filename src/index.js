import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//var routes = require('./config/routes');
import routes from './config/routes';

// var HelloWorld = React.createClass({
// 	render: function () {
// 		return (
// 				<h2>Hello {this.props.name}!</h2>
// 		)
// 	}
// });

// ****************************************************

// var USER_DATA = {
// 	name: 'PinkyBoy McGinnis',
// 	username: 'tylermcginnis',
// 	image: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
// }

// var Link = React.createClass({
// 	changeURL: function() {
// 		window.location.replace(this.props.href)
// 	},
// 	render: function() {
// 		return (
// 			<span 
// 				style={{color: 'blue', cursor: 'pointer'}}
// 				onClick={this.changeURL}>
// 				{this.props.children}
// 			</span>
// 		)
// 	}
// });


// var ProfilePic = React.createClass({
// 	render: function () {
// 		return <img src={this.props.imageUrl} style={{height: 100, width:100}} />
// 	}
// });

// var ProfileLink = React.createClass({
// 	render: function () {
// 		return (
// 			<div>
// 				<Link href={'https://www.github.com/' + this.props.username}>
// 				  {this.props.username}
// 				</Link>  
// 			</div>
// 		)
// 	}
// });

// var ProfileName = React.createClass({
// 	render: function () {
// 		return (
// 			<div>{this.props.name}</div>
// 		)
// 	}
// });

// var Avatar = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<ProfilePic imageUrl={this.props.user.image} />
// 				<ProfileName name={this.props.user.name} />
// 				<ProfileLink username={this.props.user.username} />
// 			</div>	
// 		)
// 	}
// }); ****************************************************

ReactDOM.render(
	// <HelloWorld name="Tyler" />,  // works with HelloWorld
	// < Avatar user={USER_DATA} />, // works with Avatar, and everything between the stars
	routes,
	document.getElementById('root')
);
