// features/step_definitions/errors_steps.js

var errorsWrapper = function () {
	this.Calculator = require('http://thinkthroughmath.github.io/javascript-calculator/javascript-calculator.js').Calculator;
	
	// Scenario: NaN Math
	this.Given(/^I have entered (\d+)$/, function (arg1, callback) {
		var arg1Array = arg1.split("");
		for (var i=0; i < arg1.length; i++) {
			if (arg1Array[i] == ".") {
				this.prototype.decimalClick();
			}
			else {
				this.prototype.numberClick(arg1Array[i]);
			}
		}
		callback.pending();
	});
	this.Given(/^I have pressed divide$/, function (callback) {
		this.prototype.divisionClick();
		callback.pending();
	});
	this.Given(/^I have enetered (\d+)$/, function (arg1, callback) {
		var arg1Array = arg1.split("");
		for (var i=0; i < arg1.length; i++) {
			if (arg1Array[i] == ".") {
				this.prototype.decimalClick();
			}
			else {
				this.prototype.numberClick(arg1Array[i]);
			}
		}
		callback.pending();
	});
	this.Given(/^I have pressed equals$/, function (callback) {
		this.prototype.equalsClick();
		callback.pending();
	});
	this.Given(/^I have pressed decimal$/, function (callback) {
		this.prototype.decimalClick();
		callback.pending();
	});
	this.Given(/^I have entered (\d+)$/, function (arg1, callback) {
		var arg1Array = arg1.split("");
		for (var i=0; i < arg1.length; i++) {
			if (arg1Array[i] == ".") {
				this.prototype.decimalClick();
			}
			else {
				this.prototype.numberClick(arg1Array[i]);
			}
		}
		callback.pending();
	});
	this.Given(/^A "NaN" error is displayed$/, function (callback) {
		var actError = this.prototype.display();
		if (actError == "NaN") {
			callback.pending();
		}
		else {
			callback.fail(new Error("Test failed to produce correct error type."));
		}
	});
	this.When(/^I press divide$/, function (callback) {
		this.prototype.divisionClick();
		callback.pending();
	});
	this.When(/^I enter (\d+)$/, function (arg1, callback) {
		var arg1Array = arg1.split("");
		for (var i=0; i < arg1.length; i++) {
			if (arg1Array[i] == ".") {
				this.prototype.decimalClick();
			}
			else {
				this.prototype.numberClick(arg1Array[i]);
			}
		}
		callback.pending();
	});
	this.When(/^I press equals$/, function (callback) {
		this.prototype.equalsClick();
		callback.pending();
	});
	this.Then(/^The result should be (\d+)$/, function (arg1, callback) {
		var expResult = arg1;
		var actResult = this.prototype.display();
		
		if (expResult == actResult) {
			callback();
		}
		else {
			callback.fail(new Error("Errors should resolve to 0."));
		}
	});
	
	// Scenario: Imaginary Numbers
	this.Given(/^I have entered (\d+)$/, function (arg1, callback) {
		var arg1Array = arg1.split("");
		for (var i=0; i < arg1.length; i++) {
			if (arg1Array[i] == ".") {
				this.prototype.decimalClick();
			}
			else {
				this.prototype.numberClick(arg1Array[i]);
			}
		}
		callback.pending();
	});
	this.Given(/^I have pressed negative$/, function (callback) {
		this.prototype.negativeClick();
		callback.pending();
	});
	this.Given(/^An "Error" error is displayed$/, function (callback) {
		var actError = this.prototype.display();
		if (actError == "Error") {
			callback.pending();
		}
		else {
			callback.fail(new Error("Test failed to produce correct error type."));
		}
		callback.pending();
	});
	this.When(/^I press squared$/, function (callback) {
		this.prototype.squareClick();
		callback.pending();
	});
	this.Then(/^The result should be (\d+)$/, function (arg1, callback) {
		var expResult = arg1;
		var actResult = this.prototype.display();
		
		if (expResult == actResult) {
			callback();
		}
		else {
			callback.fail(new Error("Errors should resolve to 0."));
		}
	});
};