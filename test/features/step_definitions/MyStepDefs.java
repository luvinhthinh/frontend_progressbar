package step_definitions;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDefs {
	private WebDriver driver;
	
	private String getColorRGB(String color){
		return "blue".equals(color) ? "rgba(173, 216, 230, 1)" :
			"red".equals(color)? "rgba(255, 0, 0, 1)" : "rgba(0, 0, 0, 1)"; 
	}
	
	@Given("^I am on the (.*)$")
	public void goToURL(String url) throws Throwable {
	    driver = new FirefoxDriver();
	    driver.get(url);
	}

	@Then("^I should see (\\d+) progress bars$")
	public void countProgressBar(int expected) throws Throwable {
	    Assert.assertEquals(expected, driver.findElements(By.className("progress")).size());
	}

	@Then("^I should see (\\d+) buttons$")
	public void countButton(int expected) throws Throwable {
		Assert.assertEquals(expected, driver.findElements(By.tagName("button")).size());
	}

	@Then("^I should see (\\d+) drop down list$")
	public void countDropDownList(int expected) throws Throwable {
		Assert.assertEquals(expected, driver.findElements(By.tagName("select")).size());
	}

	@When("^I click the drop down list$")
	public void selectDropDownList() throws Throwable {
		driver.findElement(By.tagName("select")).click();
	}

	@Then("^I should see (\\d+) options: (.*)$")
	public void checkDropDownList(int expectedNumber, String options) throws Throwable {
		String[] expectedOptionList = options.split(",");
	    WebElement dropdown = driver.findElement(By.tagName("select"));
	    List<WebElement> actualOptionList = dropdown.findElements(By.tagName("option"));
	    Assert.assertEquals(expectedNumber, actualOptionList.size());
	    for(int i=0; i < expectedNumber; i++){
	    	Assert.assertTrue(expectedOptionList[i].trim().equals(actualOptionList.get(i).getText()));
	    }
	}

	@Then("^I should see one button with label (.*)$")
	public void checkButtonLabel(String label) throws Throwable {
		boolean found = false;
		for( WebElement button : driver.findElements(By.tagName("button"))){
			if(button.getText().equals(label)){
				found = true;
				break;
			}
		}
		Assert.assertTrue(found);
	}

	@When("^I select (.*)$")
	public void selectProgressBar(String selection) throws Throwable {
	    List<WebElement> optionList = driver.findElement(By.tagName("select")).findElements(By.tagName("option"));
	    for(WebElement option : optionList){
	    	System.out.println("option text = " + option.getText());
	    	if(option.getText().equals(selection)) {
	            option.click();
	            break;
	        }
	    }
	}

	@Then("^I should see progress bar (\\d+) with value (.*) and (.*) color$")
	public void checkProgressBarValueAndColor(int progressBarNumber, String expectedDefaultValue, String expectedColor) throws Throwable {
		WebElement bar = driver.findElements(By.className("progress")).get(progressBarNumber - 1);
		Assert.assertEquals(expectedDefaultValue, bar.findElement(By.className("usage-display")).getText());	 
		Assert.assertEquals(getColorRGB(expectedColor), bar.findElement(By.className("progress-bar")).getCssValue("background-color"));
	}

	@When("^I click button (.*)$")
	public void clickButton(String label) throws Throwable {
		for( WebElement button : driver.findElements(By.tagName("button"))){
			if(button.getText().equals(label)){
				button.click();
				break;
			}
		}
	}
	
	@After
	public void afterScenario() {
	    driver.close();
	}

}
