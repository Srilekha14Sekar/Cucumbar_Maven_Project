package com.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.cucumberproject.CucumberBaseClassAda;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\feature" , glue = "com.stepdefination" ,
                               monochrome = true , dryRun = false , strict = false ,
                               plugin = {"html:Report", "json:Report/cucumber.json" , "pretty" ,
                               "com.cucumber.listener.ExtentCucumberFormatter:Report/Adactin.html"}  )

public class TestRunner {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void setUp() {
		
		driver = CucumberBaseClassAda.getBrowser();
	}
	
	@AfterClass
	public static void tearDown() {
		
		CucumberBaseClassAda.close();
		
	}
		
}

