package br.com.topicos.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class Steps {

	
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
