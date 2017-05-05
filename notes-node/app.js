console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

//var sum = notes.add(9, -2);
//console.log('Result: ', sum);

//console.log(_.isString(true));
//console.log(_.isString('Warner'));
var filteredArray = _.uniq(['Warner', 1, 'Warner', 1, 2, 3, 4]);
console.log(filteredArray);

//var res = notes.addNote();
//console.log(res);

//var user = os.userInfo();

//fs.appendFileSync('greetings.txt', `Hello, ${user.username}! You are ${notes.age}.`);

