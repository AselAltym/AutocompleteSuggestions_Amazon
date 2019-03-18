Feature: Autocomplete feature for amazon  website
  @amazon #Tag to run the specific steps
  Scenario: Verify user should able to type any letter, autocomplete provides 10 options on drop down list

    Given Users is on the amazon homepage
    When User enters iPhone keyword
    Then User should see iPhone in suggestions
    And User should see required number of suggestions

