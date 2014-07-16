// features/step_definitions/decimal_steps.js

var decimalWrapper = function () {
	this.Calculator = require('http://thinkthroughmath.github.io/javascript-calculator/javascript-calculator.js').Calculator;
	
	// Scenario: Entering Very Small Numbers 1
	this.Given(/^I have entered (\d+)$/, function (arg1, callback) {
		this.prototype.numberClick(arg1);
		callback.pending();
	});
	this.Given(/^I have pressed caret$/, function (callback) {
		this.prototype.exponentClick();
		callback.pending();
	});
	this.Given(/^I have entered (\d+)$/, function (arg2, callback) {
		this.prototype.numberClick(arg2);
		callback.pending();
	});
	this.Given(/^I have pressed negative$/, function (callback) {
		this.prototype.negativeClick();
		callback.pending();
	});
	this.When(/^I press equals$/, function (callback) {
		this.prototype.equalsClick();
		callback.pending();
	});
	this.Then(/^the display should update to (\d+)e\-(\d+)$/, function (arg1, arg2, callback) {
		var verysmall1 = this.prototype.display();
		var exVSN1 = arg1 + "e-" + arg2; 
		if (verysmall1 == exVSN1) {
			callback();
		}
		else if (verysmall1.length < 5) {
			callback();
		}
		else {
			callback.fail(new Error("Inconsistent handling of decimals, should read: " + exVSN1));
		}
	});
	
	// Scenario: Entering Very Small Numbers 2
	this.Given(/^I have entered (\d+)$/, function (arg1, callback) {
		this.prototype.numberClick(arg1);
		callback.pending();
	});
	this.Given(/^I have pressed caret$/, function (callback) {
		this.prototype.exponentClick();
		callback.pending();
	});
	this.Given(/^I have entered (\d+)$/, function (arg2, callback) {
		this.prototype.numberClick(arg2);
		callback.pending();
	});
	this.Given(/^I have pressed negative$/, function (callback) {
		this.prototype.negativeClick();
		callback.pending();
	});
	this.When(/^I press equals$/, function (callback) {
		this.prototype.equalsClick();
		callback.pending();
	});
	this.Then(/^the display should update to (\d+)e\-(\d+)$/, function (arg1, arg2, callback) {
		var verysmall2 = this.prototype.display();
		var exVSN2 = arg1 + "e-" + arg2;
		if (verysmall2 == exVSN2) {
			callback();
		}
		else if (verysmall2.length < 5) {
			callback();
		}
		else {
			callback.fail(new Error("Inconsistent handling of decimals, should read: " + exVSN2));
		}
	});
	
	// Scenario: Multiplication of Moderately Small Numbers
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
	this.Given(/^I have pressed multiply$/, function (callback) {
		this.prototype.multiplicationClick();
		callback.pending();
	});
	this.Given(/^I have entered (\d+)\.(\d+)$/, function (arg2, callback) {
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
	this.Then(/^The display should update to (\d+)e-(\d+)$/, function (arg1, arg2, callback) {
		var actProduct = this.prototype.display();
		var exProduct = arg1 + "e-" + arg2;
		if (actProduct == exProduct) {
			callback();
		}
		else if (actProduct.length < 5) {
			callback();
		}
		else {
			callback.fail(new Error("Inconsistent handling of decimals, should read: " + exProduct));
		}
	});
	
	// Scenario: Multiplication of Very Large Numbers
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
	this.Given(/^I have pressed multiply$/, function (callback) {
		this.prototype.multiplicationClick();
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
	this.Then(/^The display should update to (\d+)e(\d+)$/, function (arg1, arg2, callback) {
		var actProduct2 = this.prototype.display();
		var exProduct2 = arg1 + "e" + arg2;
		
		if (actProduct2 == exProduct2) {
			callback();
		}
		else if (actProduct2 > 8) {
			callback.fail(new Error("Inconsistent use of scientific notation, should read: " + exProduct2));
		}
	});
};
	
