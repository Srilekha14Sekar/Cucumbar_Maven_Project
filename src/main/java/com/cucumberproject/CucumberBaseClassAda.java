package com.cucumberproject;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.ui.Select;

public class CucumberBaseClassAda {
	

	  public static WebDriver driver;
	
	  public static WebDriver getBrowser() {
		
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\Drivers\\chromedriver.exe");
		
		  return driver = new ChromeDriver();
		 
	}
		 
	  public static void getURL(String url) {
		
		  driver.get(url);
		
	}
		
	  public static void  clickOnElement(WebElement element) {
		
		  element.click();
		
	}
	
	  public static void inputValueElement(WebElement element , String value) {
		element.sendKeys(value);
		
	}
	  
	  public static void selectByVisible(WebElement element , String text ) {
	    Select V = new Select(element);
		V.selectByVisibleText(text);
	
	}
	  
	  public static void selectByIndex(WebElement element, int no) {
		Select I = new Select(element);
		I.selectByIndex(no);
				  
	}
	  
	  public static void selectByValue(WebElement element , String value) {
		Select VA = new Select(element);
	    VA.selectByValue(value);
	}
	  
	  public static void close() {
	    driver.close();
		
	}
	  
	  public static void Radiobutton(WebElement element) {
		element.click();
	}
	  
	  public static void screenshot(String location) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
	    File src = ts.getScreenshotAs(OutputType.FILE);
	    File des = new File(location);
		FileHandler.copy(src, des);
		  
	}

}
