package com.stepdefination;

import org.openqa.selenium.WebDriver;

import com.cucumberproject.CucumberBaseClassAda;
import com.pomanager.PageObjectManager;
import com.propertyfile.FileReaderManager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefination extends CucumberBaseClassAda {
	
    public static WebDriver driver = getBrowser();
	
	public static PageObjectManager pom = new PageObjectManager(driver);
	
	@Given("^user Must Launch The Url$")
	public void user_Must_Launch_The_Url() throws Throwable {
        String url = FileReaderManager.getObjFRM().getObjCR().getUrl();
		getURL(url);
	}

	@When("^user Enter \"([^\"]*)\" In The Username Field$")
	public void user_Enter_In_The_Username_Field(String username) throws Throwable {
		inputValueElement(pom.getObj().getName(), username);
	}

	@When("^user Enter The \"([^\"]*)\" In The Password Field$")
	public void user_Enter_The_In_The_Password_Field(String password) throws Throwable {
		 inputValueElement(pom.getObj().getPass(), password);
    }

	@Then("^user Click The Login Button And it NavigateTo Search Hotel Page$")
	public void user_Click_The_Login_Button_And_it_NavigateTo_Search_Hotel_Page() throws Throwable {
		clickOnElement(pom.getObj().getLogin());
	}

	@When("^user Select the \"([^\"]*)\" In The Location Field$")
	public void user_Select_the_In_The_Location_Field(String Sydney) throws Throwable {
		selectByVisible(pom.getObj1().getLocation(), "Sydney");
	}

	@When("^user Select The \"([^\"]*)\" In The Hotel Field$")
	public void user_Select_The_In_The_Hotel_Field(String HotelSunshine) throws Throwable {
	    selectByValue(pom.getObj1().getHotel(), "Hotel Sunshine");
	}

	@When("^user Select The \"([^\"]*)\" In The Roomtype Field$")
	public void user_Select_The_In_The_Roomtype_Field(String SuperDelux) throws Throwable {
	    selectByVisible(pom.getObj1().getRoomtype(), "Super Deluxe");
    }

	@When("^user Select The \"([^\"]*)\" In The NoOfRoom Field$")
	public void user_Select_The_In_The_NoOfRoom_Field(String NoOfRoom) throws Throwable {
		selectByIndex(pom.getObj1().getNoofrooms(), 2);
	}

	@When("^user Select The \"([^\"]*)\" In The AdultPerRoom$")
	public void user_Select_The_In_The_AdultPerRoom(String AdultPerRoom) throws Throwable {
		selectByIndex(pom.getObj1().getAdultroom(), 3);
	}

	@When("^user Select The \"([^\"]*)\" In The ChildPerRoom$")
	public void user_Select_The_In_The_ChildPerRoom(String ChildPerRoom) throws Throwable {
		selectByIndex(pom.getObj1().getChildroom(), 0);     
	}

	@Then("^user Click The Search Button And It NavigateTo Select Hotel Page$")
	public void user_Click_The_Search_Button_And_It_NavigateTo_Select_Hotel_Page() throws Throwable {
		clickOnElement(pom.getObj1().getSubmit());
	}

	@When("^user Select The HotelName In The HotelName Field$")
	public void user_Select_The_HotelName_In_The_HotelName_Field() throws Throwable {
		Radiobutton(pom.getObj2().getRd());
	}

	@Then("^user Click The Continue Button And It NavigateTo Book A Hotel Page$")
	public void user_Click_The_Continue_Button_And_It_NavigateTo_Book_A_Hotel_Page() throws Throwable {
        clickOnElement(pom.getObj2().getCtn());
    }


}