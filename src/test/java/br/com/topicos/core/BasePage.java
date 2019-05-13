package br.com.topicos.core;

import org.openqa.selenium.WebElement;

public class BasePage {
	
	
	public void sendKey(WebElement elemento, String key) {
		elemento.sendKeys(key);
	}
}
