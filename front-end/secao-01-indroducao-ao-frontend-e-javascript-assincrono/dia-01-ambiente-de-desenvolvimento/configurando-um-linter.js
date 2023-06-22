/*
 ESLint

 Um linter é uma ferramenta que nos ajuda a deixar nosso código limpo: 
 ela aponta erros de estilo e formatação do código. 

 Além disso, é essencial para a legibilidade do código - 
 especialmente quando se trabalha em equipe 
 (todas as pessoas são obrigadas a seguir as regras predefinidas).

 O linter mais popular atualmente para javascript é o ESLint.
*/

/*
 O ESLint possui várias regras, mas quem define as que serão utilizadas nos 
 projetos são as próprias empresas ou o próprio time de desenvolvimento. 
 
 Não existe um consenso absoluto sobre quais regras devem ser utilizadas ou não.
 
 Na Trybe utilizamos algumas regras específicas do ESLint nos nossos projetos e, 
 se desejar, você pode utilizá-las.
*/

/*
 Além de utilizar as regras da Trybe, podemos utilizar estilos de ESLint de outras 
 empresas conceituadas, como Google e Airbnb. 
 
 Apesar de os estilos prontos facilitarem a configuração, é importante que 
 você saiba quais regras fazem sentido para seu projeto. 
 
 Dessa forma, você pode usar algum estilo pronto como base e sobrescrever 
 as regras necessárias para que as configurações se adaptem ao seu projeto.
*/

/*
Configurando suas próprias regras do ESLint

 Para configurar o ESLint em um projeto, basta executar o comando de 
 inicialização e seguir o passo a passo que irá aparecer no terminal:
*/

//npm init @eslint/config

/*
 Após rodar o comando acima, você deverá escolher as definições que fizerem 
 mais sentido para o seu projeto. 

 Abaixo deixaremos a nossa sugestão para a configuração inicial, mas é importante
 que você responda de acordo com as necessidades do seu projeto.
*/

/*
  1. How would you like to use ESLint? - Use as setas de navegação do seu teclado
  até selecionar a opção To check syntax, find problems, and enforce code style 
  e aperte a tecla ENTER para confirmar.

  2. What type of modules does your project use? - Selecione a opção JavaScript 
  modules (import/export) para confirmar, para informar que utilizaremos 
  ES Modules no projeto.

  3. Which framework does your project use? - Como ainda não estamos usando 
  nenhum framework na nossa aplicação, selecione a opção None of these.

  4. Does your project use TypeScript? - Como utilizamos JavaScript em vez de 
  TypeScript, selecione a opção No.

  5. Where does your code run? - Selecione opção Browser.

  6. How would you like to define a style for your project? - Como estamos 
  configurando nosso próprio estilo, selecione a opção Answer 
  questions about your style.

  7. What format do you want your config file to be in? - Selecione a opção JSON.
  Essa opção, ao término da execução, irá criar o arquivo de configuração 
  .eslintrc.json, que mostraremos mais abaixo.

  8. What style of indentation do you use? - Selecione a opção Spaces.

  9. What quotes do you use for strings? - Selecione a opção Single, para 
  indicar que utilizaremos aspas simples.

  10. What line endings do you use? - Selecione a opção Unix.

  11. Do you require semicolons? - Selecione a opção Yes, para indicar que 
  utilizaremos ponto e vírgula ;.

  12. Would you like to install them now? Selecione a opção Yes, para instalar 
  todas as dependências necessárias.

  13. Which package manager do you want to use? Selecione a opção npm.
*/

/*
Após a instalação das dependências, o arquivo .eslintrc.json deve ser criado 
automaticamente. Esse é o arquivo que possui as configurações do ESLint. 

Ele virá pré-configurado com todas as regras que selecionamos no passo a passo acima.
*/

/*
Nesse arquivo será possível adicionar novas regras, ou mesmo desabilitar algumas 
regras específicas. 

Se quiser explorar mais regras e estilos, você poderá navegar na documentação.
(https://eslint.org/docs/latest/rules/)
*/

/*
{
  // Define ambientes globais
  "env": {
    "browser": true,
    "es2021": true
  },
  // Estende as características recomendadas
  "extends": "eslint:recommended",
  "overrides": [
  ],
  // Especifica as opções de linguagens JavaScript
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  // Regras do Lint
  "rules": {
    "indent": [
      "error",
      4
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
}
*/

//Para executar o eslint para checar seu código, basta executar o comando:

//npx eslint ./src

/*
Se preferir, podemos adicionar esse comando nos scripts do package.json:

// package.json
// ...
  "scripts": {
    "dev": "vite --open",
    "lint": "eslint ./src"
  },
// ...
*/

/*
Configurando o ESLint para utilizar regras de outras empresas

 Caso você opte por utilizar o estilo de ESLint utilizado por outras empresas, 
 o passo a passo será um pouco diferente.
*/

//Primeiro, instale o ESLint:

//npm init @eslint/config

/*
  1. How would you like to use ESLint? - Use as setas de navegação do seu teclado
  até selecionar a opção To check syntax, find problems, and enforce code style
  e aperte a tecla ENTER para confirmar.

  2. What type of modules does your project use? - Selecione a opção JavaScript
  modules (import/export) para informar que utilizaremos ES Modules no projeto.

  3. Which framework does your project use? - Como ainda não estamos usando 
  nenhum framework na nossa aplicação, selecione a opção None of these.

  4. Does your project use TypeScript? - Como utilizamos JavaScript em vez de 
  TypeScript, selecione a opção No.

  5. Where does your code run? - Selecione opção Browser e aperte a tecla 
  ENTER para confirmar.

  6. How would you like to define a style for your project? - Aqui você deverá 
  selecionar Use a popular style guide para indicar que deseja utilizar um estilo
  predefinido de estilo.

  7. Which style guide do you want to follow? - Você deverá selecionar o estilo 
  que você desejar, como Airbnb ou Google.

  8. What format do you want your config file to be in? - Selecione a opção JSON.

  9. Would you like to install them now? Selecione a opção Yes, para instalar 
  todas as dependências necessárias.
*/

/*
 Pronto! Com esses passos, você acaba de configurar um estilo ESLint predefinido! 

 Caso queira adicionar ou remover regras, você pode alterar o arquivo .eslintrc.json
 que foi gerado após instalar as dependências.
*/

/*
Configurando o ESLint da Trybe no seu projeto:

 Caso opte por utilizar o ESLint da trybe, é importante que a sua aplicação não 
 tenha nenhum outro linter configurado, pois algumas dependências que utilizamos 
 podem ser incompatíveis com as dependências predefinidas, o que poderá gerar 
 conflitos ou erros na instalação. 
 
 Portanto, caso você tenha realizado algum passo a passo mostrado acima, 
 você precisará desinstalar todas as dependências instaladas e deletar o conteúdo
 do arquivo .eslintrc.json antes de seguir os passos abaixo.

 Para instalar o ESLint do modulo de Front-end da Trybe execute, no seu terminal, 
 o comando:
*/

//npm install @trybe/eslint-config-frontend

/* Crie o arquivo .eslintrc.json com o seguinte conteúdo: */

/*
{
  "extends" : "@trybe/eslint-config-frontend"
}
*/

/*
 Maravilha! A partir de agora, ao rodar o comando 
 npx eslint ./src ou npm run lint 
 o eslint da Trybe irá rodar no projeto!
*/