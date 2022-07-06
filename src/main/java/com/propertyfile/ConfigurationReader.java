package com.propertyfile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
	
	public static Properties p;
	
	public ConfigurationReader() throws IOException {
		
		File f = new File ("C:\\Users\\win\\SeleniumCourse\\MavenProjectsss\\src\\main\\java\\com\\"
				+ "propertyfile\\PropFile.properties");
		
		FileInputStream FIS = new FileInputStream(f);
		
		p = new Properties();
		
		p.load(FIS);
		
	}
	
	public String getUrl() {
		
		String Url = p.getProperty("url");
		
		return Url;
	}
	
	public String getUserName() throws IOException {
		
	    String UserName = p.getProperty("username");
	    
		return UserName;
	}
	
	public  String getPassword() throws IOException {
		
		String PassWord = p.getProperty("password");
		
		return PassWord;
		
	}	

}
