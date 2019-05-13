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
        "CPF invalido"
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
        "Senha e confirmacao de senha nao conferem"
      ],
      "line": 15,
      "id": "cadastrar;deve-cadastrar-um-novo-usuario;;3"
    },
    {
      "cells": [
        "Debora",
        "Evelly",
        "23118025000",
        "evellydebora@restaurante.com",
        "232111",
        "232111",
        "81993931111",
        "centro",
        "11",
        "centro",
        "cenro",
        "55555555",
        "Email ja existente"
      ],
      "line": 16,
      "id": "cadastrar;deve-cadastrar-um-novo-usuario;;4"
    },
    {
      "cells": [
        "Essa vale nota",
        "nota 10",
        "23118025000",
        "nota_10@restaurante.com",
        "232111",
        "232111",
        "81993931111",
        "centro",
        "11",
        "centro",
        "cenro",
        "55555555",
        "Bem Vindo!"
      ],
      "line": 17,
      "id": "cadastrar;deve-cadastrar-um-novo-usuario;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14034973800,
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
  "name": "Devera exibir a seguinte mensagem \u0027CPF invalido\u0027",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.cliqueEmRegistrar()"
});
formatter.result({
  "duration": 89571000,
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
  "duration": 1386394600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicarRegistrar()"
});
formatter.result({
  "duration": 45805000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CPF invalido\u0027",
      "offset": 35
    }
  ],
  "location": "Steps.menssagem(String)"
});
formatter.result({
  "duration": 2474234199,
  "status": "passed"
});
formatter.after({
  "duration": 156063800,
  "status": "passed"
});
formatter.before({
  "duration": 11009603300,
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
  "name": "Devera exibir a seguinte mensagem \u0027Senha e confirmacao de senha nao conferem\u0027",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.cliqueEmRegistrar()"
});
formatter.result({
  "duration": 23801,
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
  "duration": 1625138700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicarRegistrar()"
});
formatter.result({
  "duration": 43832200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Senha e confirmacao de senha nao conferem\u0027",
      "offset": 35
    }
  ],
  "location": "Steps.menssagem(String)"
});
formatter.result({
  "duration": 2481478399,
  "status": "passed"
});
formatter.after({
  "duration": 127744100,
  "status": "passed"
});
formatter.before({
  "duration": 9886700800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Deve cadastrar um novo usuario",
  "description": "",
  "id": "cadastrar;deve-cadastrar-um-novo-usuario;;4",
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
  "name": "preencha o formulario com os campos; nome: \u0027Debora\u0027 sobrenome: \u0027Evelly\u0027 cpf: \u002723118025000\u0027 email: \u0027evellydebora@restaurante.com\u0027 senha: \u0027232111\u0027 confirmacao da senha: \u0027232111\u0027 telefone: \u002781993931111\u0027 logradouro: \u0027centro\u0027 numero: \u002711\u0027 bairro: \u0027centro\u0027 complemento: \u0027cenro\u0027 cep: \u002755555555\u0027",
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
  "name": "Devera exibir a seguinte mensagem \u0027Email ja existente\u0027",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.cliqueEmRegistrar()"
});
formatter.result({
  "duration": 26700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Debora",
      "offset": 44
    },
    {
      "val": "Evelly",
      "offset": 64
    },
    {
      "val": "23118025000",
      "offset": 78
    },
    {
      "val": "evellydebora@restaurante.com",
      "offset": 99
    },
    {
      "val": "232111",
      "offset": 137
    },
    {
      "val": "232111",
      "offset": 168
    },
    {
      "val": "81993931111",
      "offset": 187
    },
    {
      "val": "centro",
      "offset": 213
    },
    {
      "val": "11",
      "offset": 230
    },
    {
      "val": "centro",
      "offset": 243
    },
    {
      "val": "cenro",
      "offset": 265
    },
    {
      "val": "55555555",
      "offset": 278
    }
  ],
  "location": "Steps.preencherFormulario(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1416490100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicarRegistrar()"
});
formatter.result({
  "duration": 39720000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email ja existente\u0027",
      "offset": 35
    }
  ],
  "location": "Steps.menssagem(String)"
});
formatter.result({
  "duration": 2474562299,
  "status": "passed"
});
formatter.after({
  "duration": 107444800,
  "status": "passed"
});
formatter.before({
  "duration": 8900701300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Deve cadastrar um novo usuario",
  "description": "",
  "id": "cadastrar;deve-cadastrar-um-novo-usuario;;5",
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
  "name": "preencha o formulario com os campos; nome: \u0027Essa vale nota\u0027 sobrenome: \u0027nota 10\u0027 cpf: \u002723118025000\u0027 email: \u0027nota_10@restaurante.com\u0027 senha: \u0027232111\u0027 confirmacao da senha: \u0027232111\u0027 telefone: \u002781993931111\u0027 logradouro: \u0027centro\u0027 numero: \u002711\u0027 bairro: \u0027centro\u0027 complemento: \u0027cenro\u0027 cep: \u002755555555\u0027",
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
  "name": "Devera exibir a seguinte mensagem \u0027Bem Vindo!\u0027",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.cliqueEmRegistrar()"
});
formatter.result({
  "duration": 40300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Essa vale nota",
      "offset": 44
    },
    {
      "val": "nota 10",
      "offset": 72
    },
    {
      "val": "23118025000",
      "offset": 87
    },
    {
      "val": "nota_10@restaurante.com",
      "offset": 108
    },
    {
      "val": "232111",
      "offset": 141
    },
    {
      "val": "232111",
      "offset": 172
    },
    {
      "val": "81993931111",
      "offset": 191
    },
    {
      "val": "centro",
      "offset": 217
    },
    {
      "val": "11",
      "offset": 234
    },
    {
      "val": "centro",
      "offset": 247
    },
    {
      "val": "cenro",
      "offset": 269
    },
    {
      "val": "55555555",
      "offset": 282
    }
  ],
  "location": "Steps.preencherFormulario(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1517697900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicarRegistrar()"
});
formatter.result({
  "duration": 47821200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bem Vindo!\u0027",
      "offset": 35
    }
  ],
  "location": "Steps.menssagem(String)"
});
formatter.result({
  "duration": 2487525700,
  "status": "passed"
});
formatter.after({
  "duration": 197252099,
  "status": "passed"
});
});