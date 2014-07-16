Feature: Consistent Decimal Handling
	As a user working with moderately to very small numbers
	I want the calculator to handle the full range of numbers from MIN to MAX
	So that I can use the results with confidence that they are correct

	Scenario: Entering Very Small Numbers 1
		Given I have entered 10
			And I have pressed caret
			And I have entered 5
			And I have pressed negative
		When I press equals
		Then the display should update to 1e-5
	
	Scenario: Entering Very Small Numbers 2
		Given I have entered 10
			And I have pressed caret
			And I have entered 22
			And I have pressed negative
		When I press equals
		Then the display should update to 1e-22

	Scenario: Multiplication of Moderately Small Numbers
		Given I have entered 0.0001
			And I have pressed multiply
			And I have entered 0.0001
		When I press equals
		Then the display should update to 1e-8

	Scenario: Multiplication of Very Large Numbers
		Given I have entered 10000000
			And I have pressed multiply
			And I have entered 10000000
		When I press equals
		Then the display should update to 1e14
