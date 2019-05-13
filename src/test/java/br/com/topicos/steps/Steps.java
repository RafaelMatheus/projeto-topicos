package br.com.topicos.steps;

import br.com.topicos.core.BaseTest;
import br.com.topicos.pages.RegistrarPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class Steps extends BaseTest {
	private RegistrarPage registrar;
	
	@Before
	public void setup() {
		registrar = new RegistrarPage(navigate());
	}
	@After()
	public void tearDown() {
		quit();
	}
	
	@Given("^clique no botao registrar$")
	public void cliqueEmRegistrar(){
	
	}
	
	@And("^preencha o formulario com os campos; nome: '(.+)' sobrenome: '(.+)' cpf: '(.+)' email: '(.+)' senha: '(.+)' confirmacao da senha: '(.+)' telefone: '(.+)' logradouro: '(.+)' numero: '(.+)' bairro: '(.+)' complemento: '(.+)' cep: '(.+)'$")
	public void preencherFormulario(String nome, 
			String sobrenome,
			String cpf, 
			String email,
			String senha, 
			String confirmacao, 
			String telefone, 
			String logradouro,
			String numero, 
			String bairro, 
			String complemento,
			String cep) {
		registrar.preencherCampoNome(nome);
		registrar.preencherCampoSobrenome(sobrenome);
		registrar.preencherCampoCpf(cpf);
		registrar.preencherCampoEmail(email);
		registrar.preencherCampoSenha(senha);
		registrar.preencherCampoConfirmacaoSenha(confirmacao);
		registrar.preencherCampoTelefone(telefone);
		registrar.preencherCampoLogradouro(logradouro);
		registrar.preencherCampoNumero(numero);
		registrar.preencherCampoBairro(bairro);
		registrar.preencherCampoComplemento(complemento);
		registrar.preencherCampoCep(cep);
	}
	
	@When("^clicar no botao registrar$")
	public void clicarRegistrar(){
		registrar.submit();
	}
	
	@Then("^Devera exibir a seguinte mensagem '(.+)")
	public void menssagem(String mensagem) {
		Assert.assertEquals(mensagem, registrar.getTextAlert());
		System.out.println(registrar.getTextAlert());
	}
	
}
