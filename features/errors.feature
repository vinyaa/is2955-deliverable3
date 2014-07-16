Feature: Error Management
	As a user with an error
	I want the calculator to reset automatically when valid input is submitted
	So that I do not have to clear errors before starting the next calculation

	Scenario: NaN Math
		Given I have entered 1
			And I have pressed divide
			And I have entered 3
			And I have pressed equals
			And I have pressed decimal
			And I have entered any number
			And a “NaN” error is displayed
		When I press divide
			And I enter 3
			And I press equals
		Then the result should be 0

	Scenario: Imaginary Numbers
		Given I have entered 1
			And I have pressed negative
			And I have pressed square root
			And an “Error” error is displayed
		When I press squared
		Then the result should be 0
