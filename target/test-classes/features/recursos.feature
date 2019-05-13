#language:en
@ct001
Feature: Cadastrar
  Scenario Outline: Deve cadastrar um novo usuario
    Given clique no botao registrar
 	And preencha o formulario com os campos; nome: '<nome>' sobrenome: '<sobrenome>' cpf: '<cpf>' email: '<email>' senha: '<senha>' confirmacao da senha: '<confirmacao>' telefone: '<telefone>' logradouro: '<logradouro>' numero: '<numero>' bairro: '<bairro>' complemento: '<complemento>' cep: '<cep>'
 	When clicar no botao registrar
 	Then Devera exibir a seguinte mensagem '<mensagem>'
 
 	
 
 Examples:
    | nome      	  | sobrenome	 	 |  cpf 		 |email					  			   |senha	   |confirmacao		 |telefone		|logradouro		 | numero    |bairro      |complemento|cep        | mensagem                                |
    | Rafael    	  | Castro     	 	 |   11111111111 |suporte@restaurante.com			   |232111	   |232111			 |	81993931111	|centro          |  11		 |centro      |centro     |55555555   |CPF invalido                             |
    | Matheus   	  | Pereira    	     |   78963275035 |rh@restaurante.com     			   |232111	   |211321313        |  81993931111 |centro          |  11       | centro     |	cenro	  |55555555   |Senha e confirmacao de senha nao conferem|
    | Debora    	  | Evelly    	     |   23118025000 |evellydebora@restaurante.com         |232111	   |232111           |  81993931111 |centro          |  11       | centro     |	cenro	  |55555555   |Email ja existente                       |
    | Essa vale nota  | nota 10          |   23118025000 |nota_10@restaurante.com              |232111	   |232111           |  81993931111 |centro          |  11       | centro     |	cenro	  |55555555   |Bem Vindo!                               |
    
    	
    

