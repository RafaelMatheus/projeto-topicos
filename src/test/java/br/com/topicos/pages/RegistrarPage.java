package br.com.topicos.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class RegistrarPage {
	private WebDriver webdriver;
	
	public RegistrarPage(WebDriver webdriver) {
		this.webdriver = webdriver;
	}
	
	public void submit() {
		webdriver.findElement(By.xpath("//*[@id='form-box']/div/div/div[2]/form/div/div[14]/button[1]")).submit();
	}
	
	public String getTextAlert() {
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return webdriver.findElement(By.xpath("//*[@id='toast-container']/div/div[2]")).getText();
	}
	public void preencherCampoNome(String key) {
		webdriver.findElement(By.id("nome")).sendKeys(key);
	}
	
	public void preencherCampoSobrenome(String key) {
		webdriver.findElement(By.id("sobrenome")).sendKeys(key);
	}
	
	public void preencherCampoCpf(String key) {
		webdriver.findElement(By.id("cpf")).sendKeys(key);
	}
	
	public void preencherCampoEmail(String key) {
		webdriver.findElement(By.id("email")).sendKeys(key);
	}
	
	public void preencherCampoSenha(String key) {
		webdriver.findElement(By.id("senha")).sendKeys(key);
	}
	
	public void preencherCampoConfirmacaoSenha(String key) {
		webdriver.findElement(By.id("confirmSenha")).sendKeys(key);
	}
	
	public void preencherCampoTelefone(String key) {
		webdriver.findElement(By.id("telefone")).sendKeys(key);
	}
	
	public void preencherCampoLogradouro(String key) {
		webdriver.findElement(By.id("logradouro")).sendKeys(key);
	}
	
	public void preencherCampoNumero(String key) {
		webdriver.findElement(By.id("numero")).sendKeys(key);
	}
	
	public void preencherCampoBairro(String key) {
		webdriver.findElement(By.id("bairro")).sendKeys(key);
	}
	
	public void preencherCampoComplemento(String key) {
		webdriver.findElement(By.id("complemento")).sendKeys(key);
	}
	
	public void preencherCampoCep(String key) {
		webdriver.findElement(By.id("cep")).sendKeys(key);
	}
}
