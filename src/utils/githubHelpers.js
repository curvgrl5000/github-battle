var axios = require('axios');
var githubConfig = require('../config/secrets').github;

var param = '?client_id=' + githubConfig.clientId + "&client_secret=" + githubConfig.clientSecret;

function getUserInfo(username) {
  // axios returns a promise
  return axios.get('https://api.github.com/users/' + username + param);
}

getUserInfo('username')
.then(function(res){
  // headers - show your rate limit
  // data - info about the user
  console.log('github', res)
})

var helpers = {
  getPlayersInfo: function(players) {
    // fetch data from github
    return axios.all(players.map(function(username) {
    	return getUserInfo(username)
    })).then(function (info) {
    	return info.map(function (user) {
    		return user.data;
    	})
    }).catch(function(err) {
    	console.warn('Error in getPlayersInfo', err)
    })
  }
};

module.exports = helpers;
