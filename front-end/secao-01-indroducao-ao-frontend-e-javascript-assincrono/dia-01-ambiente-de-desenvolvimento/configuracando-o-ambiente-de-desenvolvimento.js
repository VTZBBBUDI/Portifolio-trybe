/*
O que vamos construir:

 Para demonstrarmos os conceitos do dia de hoje, 
 iremos criar uma aplicação que é um Gerador de Senhas Aleatórias. 
 A ideia da aplicação é que, a cada vez que o botão é clicado, 
 ela recomenda uma senha forte.
 Essa senha é gerada por uma biblioteca externa chamada nanoid.
*/
/*
Nano ID é uma biblioteca geradora de IDs randomizados.
Como o UUID há uma possibilidade de gerar IDs duplicados, mas é uma chance bem pequena.
*/

const { nanoid } = require('nanoid');
nanoid(36); //=> "rx2fiXXdPHUB1k78g9J4QOhlQzSARoVkLWMy"

//nanoid(x) é o numero de caracteres utilizados na id, definindo seu tamanho.

/*
 Por que criar um ambiente de desenvolvimento web?

 Até agora, para iniciarmos um novo projeto web, 
 nós criamos tudo em uma página HTML - e adicionamos dentro dela tags scripts para trabalharmos com o JavaScript.
 Quando começamos a criar aplicações mais complexas, é importante termos um ambiente devidamente configurado.
*/

/*
 Temos algumas vantagens com um ambiente de desenvolvimento configurado:

  • Não precisamos nos preocupar com a ordem das tags scripts dentro do nosso HTML.
  • Não precisamos nos preocupar com dependências entre diferentes arquivos.
  • Conseguimos instalar e trabalhar com bibliotecas externas do NPM, sem necessidade de usarmos um CDN.
  • Ao não usarmos mais CDN, não precisamos nos preocupar com variáveis JavaScript poluindo o escopo global do nosso navegador.
  • Conseguimos usar formas mais avançadas de CSS como pré-processadores (sass, por exemplo) bem como vários frameworks CSS (tais como tailwindCSS, bootstrap e outros).
  • Conseguimos otimizar para performance (por exemplo, utilizando técnicas como tree shaking, bundling e minificação).
*/

/*
Iniciando um projeto com NPM

O primeiro passo é criarmos nosso arquivo HTML, 
que será a porta de entrada (entry point) da nossa aplicação. 
Podemos criar um boilerplate simples para nosso index.html:
*/

/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </meta>
  <title>Gerador de Senhas Seguras</title>
</head>
<body>
  <h1>Gerador de Senhas Seguras</h1>
  <button>Gerar Senha Segura</button>
  <h2>...</h2>
</body>
</html>
*/

//Agora que temos nosso index.html pronto, vamos iniciar um projeto com a ajuda do NPM. 
//Digite o seguinte comando no terminal:

//npm init -y

/*
 Repare que utilizamos a flag -y para criarmos um projeto com as configurações básicas de forma mais rápida e não interativa.

 Ao utilizar esse comando, será criado na raiz do projeto um arquivo package.json. 
 Ele é o principal arquivo de configuração do seu projeto.
 E é nele em que armazenaremos algumas das principais informações que nosso projeto utilizará. 
 Fique à vontade para alterar o nome, descrição, autor e outras informações do package.json.
*/

/*
Configurando Pastas

 Agora que temos o projeto configurado com o package.json talvez seja interessante 
 começarmos a mexer na estrutura de pastas.

 Geralmente em projetos JavaScript estruturamos duas pastas principais:

  • src: Utilizada para o código fonte
  • dist ou build: Utilizada para o código compilado que irá para produção. Geralmente essa pasta é criada automaticamente por nosso ambiente.

 Note que, apesar dessa estrutura ser bastante utilizada, essa não é uma regra, 
 e você poderá estruturar seu projeto da forma que sentir mais confortável.
*/

//Vamos então criar nossa pasta src e incluir um arquivo main.js nela.

//mkdir src
//touch src/main.js

//Vamos também fazer o link do nosso arquivo JavaScript no nosso index.html:

/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gerador de Senhas Seguras</title>
</head>
<body>
  <h1>Gerador de Senhas Seguras</h1>
  <button>Gerar Senha Segura</button>
  <h2>...</h2> 
  --> <script type="module" src="./src/main.js"></script> <!--
</body>
</html>
*/

/*
Configurando o GIT

 Precisamos também iniciar um novo repositório git e fazermos nosso commit inicial:
*/

//git init
//git add .
//git commit -m "initial commit"