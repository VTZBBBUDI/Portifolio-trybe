/*
NPX

O NPX é um programa que é instalado quando instalamos o NPM 
(a partir da versão 5.2). 
Quando falamos de NPX, precisamos entender o que é NPM.
*/

/*
NPM 

 O NPM é um gerenciador de pacotes que é instalado 
 automaticamente quando instalamos o node na nossa máquina.
 Ele também é o hub onde ficam armazenadas a maioria das bibliotecas javascript.

 Existem outros gerenciadores de pacotes além do NPM, sendo o Yarn e o pnPM, os mais famosos. 
 O NPM e o Yarn cumprem as mesmas funções - ambos são utilizados para instalar 
 e gerenciar as versões dos pacotes que utilizamos nos nossos projetos.
*/

//Para instalar um pacote na aplicação utilizando o NPM, basta executar o seguinte comando:

//npm install nomeDoPacote

/*
 Ao executar o comando acima, você estará adicionando o pacote instalado às dependências do projeto. 
 Você pode verificar todas as dependências do projeto na chave dependencies do arquivo package.json.

 Caso você acesse algum projeto que já possui alguma dependência, como, 
 por exemplo, os projetos da Trybe, basta executar o comando abaixo para 
 instalar todos os pacotes que estão definidos no arquivo package.json:
*/

//npm install

/*
NPX

 Algumas bibliotecas javascript também possuem executáveis, isto é, 
 scripts que podem rodar com a linha de comando (CLIs ou command line interfaces).
 O vite, é um deles, por exemplo.


 O NPX é um programa que executa (daí o “X” do NPX) esses scripts de forma mais 
 simplificada. Ele funciona da seguinte forma:

  • Se a biblioteca está instalada no projeto (consta como uma dependência no arquivo package.json), o NPX executa o script dessa biblioteca;
  • Se a biblioteca não está instalada no projeto, ele instala de forma temporária a biblioteca e, após a instalação, executa o script.
*/

/*
NPM scripts

 Além de ser um gerenciador de pacotes e além de executar scripts pelo NPX,
 o NPM também possui a funcionalidade de executar scripts customizados.

 Para isso, basta criarmos e nomearmos nossos scripts na chave scripts do 
 arquivo package.json. 
 
 Posteriormente, para rodar nossos scripts customizados, basta executar o 
 comando npm run nome-do-script.
*/

/*
 Voltando ao nosso projeto de gerador de senhas, vamos instalar o vite no nosso 
 projeto para executarmos um script customizado para subir nosso dev server:
*/

//npm install vite

/*
 Agora, no arquivo package.json, na chave scripts, vamos adicionar o comando dev 
 que será mapeado para o script que roda o nosso servidor.
*/

// package.json

/* {
   "name": "gerador-de-senhas",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
      "dev": "vite --open" <--
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "dependencies": {
    "nanoid": "^4.0.0",
     "vite": "^2.0.0"
   },
   "type": "module"
 }
*/

//Dessa forma, ao executar o comando npm run dev temos nosso servidor rodando!