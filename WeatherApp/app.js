const request = require('request');

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1804%20n%20110%20e%20lehi%20utah',
	json: true
}, (error, response, body) => {
	console.log(body);
})