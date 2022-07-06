package com.propertyfile;

import java.io.IOException;

public class FileReaderManager {
	
	private FileReaderManager() {
		
		
	}
	
	public static FileReaderManager getObjFRM() {
		
		FileReaderManager frm = new FileReaderManager();
		
		return frm;
		
		
	}

	public ConfigurationReader getObjCR() throws IOException {
		
		ConfigurationReader CR = new ConfigurationReader();
		
		return CR;	
		
	}
}
