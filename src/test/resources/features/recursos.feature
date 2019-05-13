#language:en
@ct001
Feature: Cadastrar
  Scenario Outline: Deve cadastrar um novo usuario
    Given clique no botao registrar
 	And preencha o formulario com os campos; nome: '<nome>' sobrenome: '<sobrenome>' cpf: '<cpf>' email: '<email>' senha: '<senha>' confirmacao da senha: '<confirmacao>' telefone: '<telefone>' logradouro: '<logradouro>' numero: '<numero>' bairro: '<bairro>' complemento: '<complemento>' cep: '<cep>'
 	And clicar no botao registrar
 
 	
 
 Examples:
    | nome      | sobrenome	 	 |  cpf 		 |email					 |senha		   |confirmacao		 |telefone		|logradouro		 | numero    |bairro      |complemento|cep        |
    | Rafael    | Castro     	 |   11111111111 |suporte@restaurante.com|232111	   |232111			 |	81993931111	|centro          |11		 |centro      |centro     |55555555   |
    | Matheus   | Pereira    	 |   11111111111 |rh@restaurante.com     |232111	   |232111           |  81993931111 |centro          |  11       | centro     |	cenro	  |55555555   |
    	
    

