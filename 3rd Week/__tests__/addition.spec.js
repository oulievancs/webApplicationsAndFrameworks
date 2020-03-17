require('../node_modules/angular/angular.min.js');
require('../node_modules/angular-mocks/angular-mocks.js');
require('../math.js');

describe('Math service - add two numbers', function() {
	beforeEach(
		angular.mock.module('myApp')
	);

	var _operations;

	beforeEach(inject((operations) => {
		_operations = operations;
	}));

	it('1 + 1 should equal 2', function() {
		var actual = _operations.add(1,1);
		expect(actual).toEqual(2);
	});

	it('2 + 3 should equal 5', function() {
		var actual = _operations.add(2, 3);
		expect(actual).toEqual(5);
	});
});
