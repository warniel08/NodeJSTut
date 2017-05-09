// This..........
// var square = (x) => {
// 	var result = x * x;
// 	return result;
// };

// Is the SAME as this...
var square = (x) => x * x;

console.log(square(9));

var user = {
	name: 'Warner',
	sayHi: () => {
		// This console log won't work on arguments because it's not bound to the right thing
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	},
	sayHiAlt () {
		// These work
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	}
};

user.sayHi();
user.sayHiAlt(1, 2, 3);