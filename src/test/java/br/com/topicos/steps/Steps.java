package br.com.topicos.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import br.com.topicos.config.Config;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class Steps {

	@Before
	public void setup() {
		WebDriver driver;
		ChromeOptions options = new ChromeOptions();
		options.setHeadless(Config.HEADLESS);
		System.setProperty("webdriver.chrome.driver", Config.BROWSER);
		driver = new ChromeDriver(options);
		driver.manage().window().maximize();
		driver.get(Config.ENDERECO);
	}
	
	@After
	@Given("^Que o usuario efetue o login no sistema$")
	public void efetueLoginNoSistema(){
	
	}
	@And("^Acesse a opcao produtos$")
	public void acesseAOpcaoProdutos() {
		
	}
	@And("^Clique em cadastrar$")
	public void cliqueEmCadastrar() {
		
	}
	@Given("^Passando os parametros; nome: '(.+)' valor: '(\\d+)' categoria: '(.+)'$")
	public void passandoOsParametros(String nome, int valor, String categoria){
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Nome" + nome);
		System.out.println("valor" + valor);
		System.out.println("categoria" + categoria);
		
	}

}
