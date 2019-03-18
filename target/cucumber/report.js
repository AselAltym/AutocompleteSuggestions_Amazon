$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Amazon_searchBox.feature");
formatter.feature({
  "name": "Autocomplete feature for amazon  website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify user should able to type any letter, autocomplete provides 10 options on drop down list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@amazon"
    },
    {
      "name": "#Tag"
    },
    {
      "name": "to"
    },
    {
      "name": "run"
    },
    {
      "name": "the"
    },
    {
      "name": "specific"
    },
    {
      "name": "steps"
    }
  ]
});
formatter.step({
  "name": "Users is on the amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Amazon_StepDefinitions.users_is_on_the_amazon_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters iPhone keyword",
  "keyword": "When "
});
formatter.match({
  "location": "Amazon_StepDefinitions.user_enters_iPhone_keyword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see iPhone in suggestions",
  "keyword": "Then "
});
formatter.match({
  "location": "Amazon_StepDefinitions.user_should_see_iPhone_in_suggestions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see required number of suggestions",
  "keyword": "And "
});
formatter.match({
  "location": "Amazon_StepDefinitions.user_should_see_required_number_of_suggestions()"
});
formatter.result({
  "status": "passed"
});
});