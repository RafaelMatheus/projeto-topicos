package br.com.topicos.core;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import br.com.topicos.config.Config;

public class BaseTest {
	private WebDriver driver;
	
	public WebDriver navigate() {
		ChromeOptions options = new ChromeOptions();
		options.setHeadless(Config.HEADLESS);
		System.setProperty("webdriver.chrome.driver", Config.BROWSER);
		driver = new ChromeDriver(options);
		driver.manage().window().maximize();
		driver.get(Config.ENDERECO);
		return driver;
	}
	
	public void quit() {
		driver.close();
	}
}
