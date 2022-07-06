package com.pomanager;

import org.openqa.selenium.WebDriver;
import com.pom.LoginPage;
import com.pom.RadioButtonPage;
import com.pom.SelectionPage;

public class PageObjectManager {
	
	public WebDriver driver;
	
	private LoginPage LP;
	
	private SelectionPage SP;
	
	private RadioButtonPage RP;
	
	public PageObjectManager(WebDriver driver2) {
		
		this.driver = driver2;
	}

	public LoginPage getObj() {
		
		if (LP == null) {
			
			LP = new LoginPage(driver);
		}
		
		return LP;		
		
	}
	
    public SelectionPage getObj1() {
		
		if (SP == null) {
			
			SP = new SelectionPage(driver);
		}
		
		return SP;		
		
	}
    
    public RadioButtonPage getObj2() {
    	
    	if (RP == null) {
		
    		RP = new RadioButtonPage(driver);
    		
	   }
    	
    	return RP;
	}
}
