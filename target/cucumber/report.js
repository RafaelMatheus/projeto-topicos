$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("recursos.feature");
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
  "line": 4,
  "name": "Deve cadastrar um produto",
  "description": "",
  "id": "cadastrar;deve-cadastrar-um-produto",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Que o usuario efetue o login no sistema",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Acesse a opcao produtos",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Clique em cadastrar",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Passando os parametros; nome: \u0027\u003cnome\u003e\u0027 valor: \u0027\u003cvalor\u003e\u0027 categoria: \u0027\u003ccategoria\u003e\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
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
      "line": 11,
      "id": "cadastrar;deve-cadastrar-um-produto;;1"
    },
    {
      "cells": [
        "Rafael",
        "13",
        "Comida"
      ],
      "line": 12,
      "id": "cadastrar;deve-cadastrar-um-produto;;2"
    },
    {
      "cells": [
        "Matheus",
        "12",
        "bebida"
      ],
      "line": 13,
      "id": "cadastrar;deve-cadastrar-um-produto;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
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
  "line": 5,
  "name": "Que o usuario efetue o login no sistema",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Acesse a opcao produtos",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Clique em cadastrar",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Passando os parametros; nome: \u0027Rafael\u0027 valor: \u002713\u0027 categoria: \u0027Comida\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.efetueLoginNoSistema()"
});
formatter.result({
  "duration": 30059225700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.acesseAOpcaoProdutos()"
});
formatter.result({
  "duration": 30800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.cliqueEmCadastrar()"
});
formatter.result({
  "duration": 17000,
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
  "location": "Steps.passandoOsParametros(String,int,String)"
});
formatter.result({
  "duration": 3541900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
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
  "line": 5,
  "name": "Que o usuario efetue o login no sistema",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Acesse a opcao produtos",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Clique em cadastrar",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Passando os parametros; nome: \u0027Matheus\u0027 valor: \u002712\u0027 categoria: \u0027bebida\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Steps.efetueLoginNoSistema()"
});
