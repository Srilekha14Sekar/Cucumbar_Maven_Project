package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class RadioButtonPage {
	
	public WebDriver driver;
	
	public RadioButtonPage(WebDriver driver2) {
			
		this.driver = driver2;
		PageFactory.initElements(driver, this);
			
	}

	@FindBy(id = "radiobutton_0")
	private WebElement rd;
		
	@FindBy(id = "continue")
	private WebElement ctn;

	public WebDriver getDriver() {
		return driver;
	}

	public WebElement getRd() {
		return rd;
	}

	public WebElement getCtn() {
			return ctn;
	}

}
