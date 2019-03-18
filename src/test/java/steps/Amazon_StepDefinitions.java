package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.AmazonPage;
import utilities.Driver;

public class Amazon_StepDefinitions {

    String input = "iphone";

    AmazonPage amazon = new AmazonPage();


    @Given("Users is on the amazon homepage")
    public void users_is_on_the_amazon_homepage() {

        Driver.getDriver().get("https://www.amazon.com");
    }

    @When("User enters iPhone keyword")
    public void user_enters_iPhone_keyword() throws InterruptedException {

        amazon.amazonSearchBox.sendKeys(input);


    }

    @Then("User should see iPhone in suggestions")
    public void user_should_see_iPhone_in_suggestions() {

        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 3);

        if (amazon.dropdown.size() == 10) {
            for (int i = 0; i < amazon.dropdown.size(); i++) {
                Assert.assertTrue(amazon.dropdown.get(i).getText().contains(input));
            }
        } else {
            for (int i = 0; i < amazon.dropdown.size(); i++) {
                if (i == 1) {
                    continue;
                }
                Assert.assertTrue(amazon.dropdown.get(i).getText().contains(input));
            }
        }

    }

    @Then("User should see required number of suggestions")
    public void user_should_see_required_number_of_suggestions() {
        int count = 0;
        for (int i = 0; i < amazon.dropdown.size(); i++) {
            if (amazon.dropdown.get(i).getText().contains(input)) {
                count++;
            }
        }
        Assert.assertTrue(count==10);
    }

}


