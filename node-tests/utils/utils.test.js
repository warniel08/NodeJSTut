const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

	describe('#add', () => {
		it('should add two numbers', () => {
			var res = utils.add(33, 11);

			expect(res).toBe(44).toBeA('number');
		});
	})

	it('should async add two number', (done) => {
		utils.asyncAdd(4, 3, (sum) => {
			expect(sum).toBe(7).toBeA('number');
			done();
		})
	})
		
	it('should sqaure a number', () => {
		var res = utils.square(3);

		expect(res).toBe(9).toBeA('number');
	});

	it('should async sqaure a number', (done) => {
		utils.asyncSquare(9, (res) => {
			expect(res).toBe(81).toBeA('number');
			done();
		});
	});
});


// should verify that first and last names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
	var user = {location: 'Utah', age: 34};
	var res = utils.setName(user, 'Warner Nielsen')

	expect(res).toInclude({
		firstName: 'Warner',
		lastName: 'Nielsen'
	});
});

// it('should expect some values', () => {
	// expect(12).toNotBe(11);
	// expect({name: 'warner'}).toNotEqual({name: 'Warner'});
	// expect([2,3,4]).toExclude(1);
	// expect({
	// 	name: 'Warner',
	// 	age: 34,
	// 	location: 'Utah'
	// }).toInclude({
	// 	age: 34
	// })
// })