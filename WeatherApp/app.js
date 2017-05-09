// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
// 	.options({
// 		a: {
// 			demand: true,
// 			alias: 'address',
// 			describe: 'Address to fetch weather for',
// 			string: true
// 		}
// 	})
// 	.help()
// 	.alias('help', 'h')
// 	.argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log(JSON.stringify(results, undefined, 2));
// 	}
// });

// 35389068338d4cd61ec874e9271479b9
// https://api.darksky.net/forecast/35389068338d4cd61ec874e9271479b9/LATITUDE,LONGITUDE

const request = require('request');

request({
	url: 'https://api.darksky.net/forecast/35389068338d4cd61ec874e9271479b9/40.6999925,-112.0118669',
	json: true
}, (error, response, body) => {
	if (!error && response.statusCode === 200) {
		console.log(body.currently.temperature);
	} else {
		console.log('Unable to fetch weather');
	}	
});