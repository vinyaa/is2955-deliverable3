// features/step_definitions/complexity_steps.js

var complexityWrapper = function () {
	this.Calculator = require('http://thinkthroughmath.github.io/javascript-calculator/javascript-calculator.js').Calculator;
	
	// Scenario: Division with Non-Decimal Numbers
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
	this.Given(/^I have entered (\d+)$/, function (arg2, callback) {
		var arg2Array = arg2.split("");
		for (var i=0; i < arg2.length; i++) {
			if (arg2Array[i] == ".") {
				this.prototype.decimalClick();
			}
			else {
				this.prototype.numberClick(arg2Array[i]);
			}
		}
		callback.pending();
	});
	this.When(/^I press equals$/, function (callback) {
		this.prototype.equalsClick();
		callback.pending();
	});
	this.Then(/^The display should update to (\d+)$/, function (arg1, callback) {
		var result = this.prototype.display();
		var resultArray = result.split("");
		for (var i=0; i<result.length; i++) {
			if (resultArray[i] == ".") {
				callback.fail(new Error("Decimal present."));
			}
			else {
				callback.pending();
			}
		}
		callback();
	});

	
	// Scenario: Subtraction with Decimals that Resolve to Zero
	this.Given(/^I have entered (\d+)\.(\d+)$/, function (arg1, callback) {
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
	this.Given(/^I have pressed subtract$/, function (callback) {
		this.prototype.subtractionClick();
		callback.pending();
	});
	this.Given(/^I have entered (\d+)\.(\d+)$/, function (arg1, callback) {
		var arg2Array = arg2.split("");
		for (var i=0; i < arg2.length; i++) {
			if (arg2Array[i] == ".") {
				this.prototype.decimalClick();
			}
			else {
				this.prototype.numberClick(arg2Array[i]);
			}
		}
		callback.pending();
	});
	this.When(/^I press equals$/, function (callback) {
		this.prototype.equalsClick();
		callback.pending();
	});
	this.Then(/^The display should update to (\d+)$/, function (arg1, callback) {
		var result = this.prototype.display();
		var resultArray = result.split("");
		for (var i=0; i<result.length; i++) {
			if (resultArray[i] == ".") {
				callback.fail(new Error("Decimal present."));
			}
			else {
				callback.pending();
			}
		}
		callback();
	});
	
	// Scenario: Subtraction with Decimals that Simplify
	this.Given(/^I have entered (\d+)\.(\d+)$/, function (arg1, callback) {
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
	this.Given(/^I have pressed subtract$/, function (callback) {
		this.prototype.subtractionClick();
		callback.pending();
	});
	this.Given(/^I have entered (\d+)\.(\d+)$/, function (arg1, callback) {
		var arg2Array = arg2.split("");
		for (var i=0; i < arg2.length; i++) {
			if (arg2Array[i] == ".") {
				this.prototype.decimalClick();
			}
			else {
				this.prototype.numberClick(arg2Array[i]);
			}
		}
		callback.pending();
	});
	this.When(/^I press equals$/, function (callback) {
		this.prototype.equalsClick();
		callback.pending();
	});
	this.Then(/^The display should update to (\d+)\.(\d+)$/, function (arg1, callback) {
		var result = this.prototype.display();
		var resultArray = result.split("");
		for (var i=0; i<result.length; i++) {
			if (resultArray[i] == ".") {
				callback.fail(new Error("Decimal present."));
			}
			else {
				callback.pending();
			}
		}
		callback();
	});
};
