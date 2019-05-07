$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("alugar_filme.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:en"
    }
  ],
  "line": 3,
  "name": "Cadastrar",
  "description": "",
  "id": "cadastrar",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@ct001"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Deve cadastrar um produto",
  "description": "",
  "id": "cadastrar;deve-cadastrar-um-produto",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Que o usuario efetue o login no sistema",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Acesse a opcao produtos",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Clique em cadastrar",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Passando os parametros; nome: \u0027\u003cnome\u003e\u0027 valor: \u0027\u003cvalor\u003e\u0027 categoria: \u0027\u003ccategoria\u003e\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "cadastrar;deve-cadastrar-um-produto;",
  "rows": [
    {
      "cells": [
        "nome",
        "valor",
        "categoria"
      ],
      "line": 12,
      "id": "cadastrar;deve-cadastrar-um-produto;;1"
    },
    {
      "cells": [
        "Rafael",
        "13",
        "Comida"
      ],
      "line": 13,
      "id": "cadastrar;deve-cadastrar-um-produto;;2"
    },
    {
      "cells": [
        "Matheus",
        "12",
        "bebida"
      ],
      "line": 14,
      "id": "cadastrar;deve-cadastrar-um-produto;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Deve cadastrar um produto",
  "description": "",
  "id": "cadastrar;deve-cadastrar-um-produto;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@ct001"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Que o usuario efetue o login no sistema",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Acesse a opcao produtos",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Clique em cadastrar",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Passando os parametros; nome: \u0027Rafael\u0027 valor: \u002713\u0027 categoria: \u0027Comida\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AlugarFilmeSteps.efetueLoginNoSistema()"
});
formatter.result({
  "duration": 210517900,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.acesseAOpcaoProdutos()"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.cliqueEmCadastrar()"
});
formatter.result({
  "duration": 24500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rafael",
      "offset": 31
    },
    {
      "val": "13",
      "offset": 47
    },
    {
      "val": "Comida",
      "offset": 63
    }
  ],
  "location": "AlugarFilmeSteps.passandoOsParametros(String,int,String)"
});
formatter.result({
  "duration": 22428600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Deve cadastrar um produto",
  "description": "",
  "id": "cadastrar;deve-cadastrar-um-produto;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@ct001"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Que o usuario efetue o login no sistema",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Acesse a opcao produtos",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Clique em cadastrar",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Passando os parametros; nome: \u0027Matheus\u0027 valor: \u002712\u0027 categoria: \u0027bebida\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AlugarFilmeSteps.efetueLoginNoSistema()"
});
formatter.result({
  "duration": 36900,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.acesseAOpcaoProdutos()"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.cliqueEmCadastrar()"
});
formatter.result({
  "duration": 30700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Matheus",
      "offset": 31
    },
    {
      "val": "12",
      "offset": 48
    },
    {
      "val": "bebida",
      "offset": 64
    }
  ],
  "location": "AlugarFilmeSteps.passandoOsParametros(String,int,String)"
});
formatter.result({
  "duration": 490400,
  "status": "passed"
});
});