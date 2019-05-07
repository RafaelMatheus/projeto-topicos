#language:en
@ct001
Feature: Cadastrar
  Scenario Outline: Deve cadastrar um produto
    Given Que o usuario efetue o login no sistema
    And Acesse a opcao produtos
    And Clique em cadastrar
 	And Passando os parametros; nome: '<nome>' valor: '<valor>' categoria: '<categoria>'  
 
 Examples:
    | nome      | valor  | categoria     |
    | Rafael    | 13     |   Comida      |
    | Matheus   | 12     |    bebida     |
    
    


Scenario Outline: Deve testar regras de negocio envolvida no cadastro de produtos
    Given Que o usuario efetue o login no sistema
    And Acesse a opcao produtos
    And Clique em cadastrar
 	And Passando os parametros; nome: '<nome>' valor: '<valor>' categoria: '<categoria>'  
 
 Examples:
    | nome      | valor  | categoria     |
    | Rafael    | 13     |   Comida      |
    | Matheus   | 12     |    bebida     |