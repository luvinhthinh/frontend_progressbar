# features/myFeature.feature

Feature: Interactive progress bar
  As a tester 
  I want to see and interact with multiple progress bars 
  So that I can check if they work in accordance with my requirement

  Scenario: Count Progress Bar, buttons, and drop down list
    Given I am on the localhost:8080
    Then I should see 3 progress bars
    Then I should see 4 buttons
    Then I should see 1 drop down list
    
  Scenario: Count Items in drop down list
    Given I am on the localhost:8080
    When I click the drop down list
    Then I should see 3 options: #progress1, #progress2, #progress3
    
  Scenario: Default value of progress bars
    Given I am on the localhost:8080
    Then I should see progress bar 1 with value 25% and blue color
    Then I should see progress bar 2 with value 50% and blue color
    Then I should see progress bar 3 with value 75% and blue color
    
  Scenario: Labels of buttons
    Given I am on the localhost:8080
    Then I should see one button with label -25
    Then I should see one button with label -10
    Then I should see one button with label +10
    Then I should see one button with label +25
    
  Scenario: Interaction with buttons
    Given I am on the localhost:8080
    When I select #progress1
    When I click button +10
    Then I should see progress bar 1 with value 35% and blue color
    When I click button -10
    Then I should see progress bar 1 with value 25% and blue color
    When I click button +25
    Then I should see progress bar 1 with value 50% and blue color
    When I click button -25
    Then I should see progress bar 1 with value 25% and blue color
    When I click button -25
    Then I should see progress bar 1 with value 0% and blue color
    When I click button -25
    Then I should see progress bar 1 with value 0% and blue color
    When I click button -25
    Then I should see progress bar 1 with value 0% and blue color
    When I click button +10
    Then I should see progress bar 1 with value 10% and blue color
    When I click button -25
    Then I should see progress bar 1 with value 0% and blue color
    When I click button +10
    Then I should see progress bar 1 with value 10% and blue color
    When I click button +10
    Then I should see progress bar 1 with value 20% and blue color
    When I click button +25
    Then I should see progress bar 1 with value 45% and blue color
    When I click button +25
    Then I should see progress bar 1 with value 70% and blue color
    When I click button +25
    Then I should see progress bar 1 with value 95% and blue color
    When I click button +25
    Then I should see progress bar 1 with value 120% and red color
    When I click button +25
    Then I should see progress bar 1 with value 145% and red color
    When I click button +25
    Then I should see progress bar 1 with value 170% and red color
    When I click button -10
    Then I should see progress bar 1 with value 160% and red color
    When I click button -25
    Then I should see progress bar 1 with value 135% and red color
    When I click button -25
    Then I should see progress bar 1 with value 110% and red color
    When I click button -25
    Then I should see progress bar 1 with value 85% and blue color
   
   
   Scenario: Interaction with drop down list and buttons
    Given I am on the localhost:8080
    When I select #progress2
    When I click button +10
    Then I should see progress bar 2 with value 60% and blue color
    When I select #progress3
    When I click button +10
    Then I should see progress bar 3 with value 85% and blue color
    When I click button +25
    Then I should see progress bar 3 with value 110% and red color
    When I select #progress2
    When I click button -25
    Then I should see progress bar 2 with value 35% and blue color
    