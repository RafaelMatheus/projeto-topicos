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
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Devera exibir a seguinte mensagem \u0027\u003cmensagem\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
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
        "cep",
        "mensagem"
      ],
      "line": 13,
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
        "55555555",
        "CPF inv�lido"
      ],
      "line": 14,
      "id": "cadastrar;deve-cadastrar-um-novo-usuario;;2"
    },
    {
      "cells": [
        "Matheus",
        "Pereira",
        "78963275035",
        "rh@restaurante.com",
        "232111",
        "211321313",
        "81993931111",
        "centro",
        "11",
        "centro",
        "cenro",
        "55555555",
        ""
      ],
      "line": 15,
      "id": "cadastrar;deve-cadastrar-um-novo-usuario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16862887668,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
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
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Devera exibir a seguinte mensagem \u0027CPF inv�lido\u0027",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.cliqueEmRegistrar()"
});
formatter.result({
  "duration": 528538718,
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
  "duration": 2265201401,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicarRegistrar()"
});
formatter.result({
  "duration": 58924902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CPF inv�lido\u0027",
      "offset": 35
    }
  ],
  "location": "Steps.menssagem(String)"
});
formatter.result({
  "duration": 1064636898,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cCPF inv[�lido\u0027]\u003e but was:\u003cCPF inv[álido]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat br.com.topicos.steps.Steps.menssagem(Steps.java:64)\r\n\tat ✽.Then Devera exibir a seguinte mensagem \u0027CPF inv�lido\u0027(recursos.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 338927541,
  "status": "passed"
});
formatter.before({
  "duration": 11589395150,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
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
  "name": "preencha o formulario com os campos; nome: \u0027Matheus\u0027 sobrenome: \u0027Pereira\u0027 cpf: \u002778963275035\u0027 email: \u0027rh@restaurante.com\u0027 senha: \u0027232111\u0027 confirmacao da senha: \u0027211321313\u0027 telefone: \u002781993931111\u0027 logradouro: \u0027centro\u0027 numero: \u002711\u0027 bairro: \u0027centro\u0027 complemento: \u0027cenro\u0027 cep: \u002755555555\u0027",
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
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Devera exibir a seguinte mensagem \u0027\u0027",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.cliqueEmRegistrar()"
});
formatter.result({
  "duration": 33235,
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
      "val": "78963275035",
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
      "val": "211321313",
      "offset": 160
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
      "val": "cenro",
      "offset": 260
    },
    {
      "val": "55555555",
      "offset": 273
    }
  ],
  "location": "Steps.preencherFormulario(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2479912221,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicarRegistrar()"
});
formatter.result({
  "duration": 57535880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027",
      "offset": 35
    }
  ],
  "location": "Steps.menssagem(String)"
});
