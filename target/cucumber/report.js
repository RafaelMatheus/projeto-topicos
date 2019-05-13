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
  "name": "Deve cadastrar um novo usuario",
  "description": "",
  "id": "cadastrar;deve-cadastrar-um-novo-usuario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "clique no botao registrar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "preencha o formulario com os campos; nome: \u0027\u003cnome\u003e\u0027 sobrenome: \u0027\u003csobrenome\u003e\u0027 cpf: \u0027\u003ccpf\u003e\u0027 email: \u0027\u003cemail\u003e\u0027 senha: \u0027\u003csenha\u003e\u0027 confirmacao da senha: \u0027\u003cconfirmacao\u003e\u0027 telefone: \u0027\u003ctelefone\u003e\u0027 logradouro: \u0027\u003clogradouro\u003e\u0027 numero: \u0027\u003cnumero\u003e\u0027 bairro: \u0027\u003cbairro\u003e\u0027 complemento: \u0027\u003ccomplemento\u003e\u0027 cep: \u0027\u003ccep\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "clicar no botao registrar",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "cadastrar;deve-cadastrar-um-novo-usuario;",
  "rows": [
    {
      "cells": [
        "nome",
        "sobrenome",
        "cpf",
        "email",
        "senha",
        "confirmacao",
        "telefone",
        "logradouro",
        "numero",
        "bairro",
        "complemento",
        "cep"
      ],
      "line": 12,
      "id": "cadastrar;deve-cadastrar-um-novo-usuario;;1"
    },
    {
      "cells": [
        "Rafael",
        "Castro",
        "11111111111",
        "suporte@restaurante.com",
        "232111",
        "232111",
        "81993931111",
        "centro",
        "11",
        "centro",
        "centro",
        "55555555"
      ],
      "line": 13,
      "id": "cadastrar;deve-cadastrar-um-novo-usuario;;2"
    },
    {
      "cells": [
        "Matheus",
        "Pereira",
        "11111111111",
        "rh@restaurante.com",
        "232111",
        "232111",
        "81993931111",
        "centro",
        "11",
        "centro",
        "cenro",
        "55555555"
      ],
      "line": 14,
      "id": "cadastrar;deve-cadastrar-um-novo-usuario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 19035768519,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Deve cadastrar um novo usuario",
  "description": "",
  "id": "cadastrar;deve-cadastrar-um-novo-usuario;;2",
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
  "name": "clique no botao registrar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "preencha o formulario com os campos; nome: \u0027Rafael\u0027 sobrenome: \u0027Castro\u0027 cpf: \u002711111111111\u0027 email: \u0027suporte@restaurante.com\u0027 senha: \u0027232111\u0027 confirmacao da senha: \u0027232111\u0027 telefone: \u002781993931111\u0027 logradouro: \u0027centro\u0027 numero: \u002711\u0027 bairro: \u0027centro\u0027 complemento: \u0027centro\u0027 cep: \u002755555555\u0027",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "clicar no botao registrar",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.cliqueEmRegistrar()"
});
formatter.result({
  "duration": 2660453704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rafael",
      "offset": 44
    },
    {
      "val": "Castro",
      "offset": 64
    },
    {
      "val": "11111111111",
      "offset": 78
    },
    {
      "val": "suporte@restaurante.com",
      "offset": 99
    },
    {
      "val": "232111",
      "offset": 132
    },
    {
      "val": "232111",
      "offset": 163
    },
    {
      "val": "81993931111",
      "offset": 182
    },
    {
      "val": "centro",
      "offset": 208
    },
    {
      "val": "11",
      "offset": 225
    },
    {
      "val": "centro",
      "offset": 238
    },
    {
      "val": "centro",
      "offset": 260
    },
    {
      "val": "55555555",
      "offset": 274
    }
  ],
  "location": "Steps.preencherFormulario(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2446658309,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicarRegistrar()"
});
formatter.result({
  "duration": 218015244,
  "status": "passed"
});
formatter.after({
  "duration": 246236519,
  "status": "passed"
});
formatter.before({
  "duration": 22396824606,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Deve cadastrar um novo usuario",
  "description": "",
  "id": "cadastrar;deve-cadastrar-um-novo-usuario;;3",
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
  "name": "clique no botao registrar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "preencha o formulario com os campos; nome: \u0027Matheus\u0027 sobrenome: \u0027Pereira\u0027 cpf: \u002711111111111\u0027 email: \u0027rh@restaurante.com\u0027 senha: \u0027232111\u0027 confirmacao da senha: \u0027232111\u0027 telefone: \u002781993931111\u0027 logradouro: \u0027centro\u0027 numero: \u002711\u0027 bairro: \u0027centro\u0027 complemento: \u0027cenro\u0027 cep: \u002755555555\u0027",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "clicar no botao registrar",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.cliqueEmRegistrar()"
});
formatter.result({
  "duration": 48875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Matheus",
      "offset": 44
    },
    {
      "val": "Pereira",
      "offset": 65
    },
    {
      "val": "11111111111",
      "offset": 80
    },
    {
      "val": "rh@restaurante.com",
      "offset": 101
    },
    {
      "val": "232111",
      "offset": 129
    },
    {
      "val": "232111",
      "offset": 160
    },
    {
      "val": "81993931111",
      "offset": 179
    },
    {
      "val": "centro",
      "offset": 205
    },
    {
      "val": "11",
      "offset": 222
    },
    {
      "val": "centro",
      "offset": 235
    },
    {
      "val": "cenro",
      "offset": 257
    },
    {
      "val": "55555555",
      "offset": 270
    }
  ],
  "location": "Steps.preencherFormulario(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2017946331,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicarRegistrar()"
});
formatter.result({
  "duration": 472483255,
  "status": "passed"
});
formatter.after({
  "duration": 304854976,
  "status": "passed"
});
});