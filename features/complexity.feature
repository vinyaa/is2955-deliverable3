Feature: Minimum Complexity
	As a primary school teacher presenting the calculator for the first time
	I want the calculator to present the simplest answer possible
	So that extraneous decimals do not confuse my young students

	Scenario: Division with Non-Decimal Numbers
		Given I have entered 6
			And I have pressed divide
			And I have entered 2
		When I press equals
		Then the display should update to 3

	Scenario: Subtraction with Decimals that Resolve to Zero
		Given I have entered 3.5
			And I have pressed subtract
			And I have entered 1.5
		When I press equals
		Then the display should update to 2
	
	Scenario: Subtraction with Decimals that Simplify
		Given I have entered 5.45
			And I have pressed subtract
			And I have entered 2.05
		When I press equals
		Then the display should update to 3.4
		
	Scenario: Multiplication with Decimals
		Given I have entered 1.20
			And I have pressed multiply
			And I have entered 1.20
		When I press equals
		Then the display should update to 1.44
