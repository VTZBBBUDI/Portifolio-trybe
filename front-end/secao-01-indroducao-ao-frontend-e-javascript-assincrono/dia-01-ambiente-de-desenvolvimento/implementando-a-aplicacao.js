/*
Nosso gerador de senhas precisa gerar caracteres aleatórios quando clicamos no botão.

Poderíamos fazer esse algoritmo que gera caracteres aleatório ou, 
alternativamente, podemos utilizar uma biblioteca externa que já faz esse 
trabalho por nós.
*/

/*

Instalando Bibliotecas Externas

 Como foi dito anteriormente, não vamos usar um CDN. 
 Dessa forma, o primeiro passo agora é instalarmos localmente a biblioteca nanoid:

*/

//npm install nanoid

/*


Após a instalação repare que duas coisas aconteceram:

  • No arquivo package.json foi adicionada uma dependência com a biblioteca.
  • Foi criada a pasta node_modules , que é onde fica o código das bibliotecas que iremos usar.

*/

/*
 Não é boa prática incluirmos a pasta node_modules no nosso repositório git.
 Para ignorarmos essa pasta, vamos criar um arquivo .gitignore e adicionar 
 a pasta node_modules dentro dele.
*/

//touch .gitignore
//echo "node_modules/" >> .gitignore

/*Com isso, quando você subir seu projeto no github, 
nenhum desses arquivos ou pastas que estão listados no .gitignore irá para o repositório remoto.
*/

/*
Utilizando a biblioteca nanoid

 Dando uma rápida olhada na documentação, percebemos que é bastante simples utilizar a biblioteca.

 Vamos adicionar esse código ao nosso src/main.js:
*/

//import { nanoid } from 'nanoid'

//const randomPassword = nanoid()
//console.log(randomPassword)

/*
 Repare que estamos usando a sintaxe import/export no nosso arquivo.
 Para que a gente consiga utilizar essa sintaxe (ES Modules) no nosso código,
 precisamos adicionar a chave "type": "module" no arquivo package.json :
*/

/*
{
  "name": "gerador-de-senhas",
   "version": "1.0.0",
  "description": "",
   "main": "index.js",
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "dependencies": {
     "nanoid": "^4.0.0"
   },
--> "type": "module" <--
 }
*/

/*
 Agora algo interessante acontece:

  • Ao rodar o arquivo javascript diretamente com o node: node src/main.js, 
  o código funciona.
  
  • Ao rodar a aplicação no navegador, temos um erro.

 Isso acontece porque o navegador não sabe que essa biblioteca está no node_modules.
 Essa forma de importar funciona no node, mas não no navegador.
*/

//import { nanoid } from 'nanoid'

//Para que funcione, vamos usar o vite.

/*
Utilizando o Vite

 Para o navegador conseguir acessar as bibliotecas que estão na node_modules 
 podemos usar um bundler dev-server. 
 
 Exitem diversas ferramentas que nos auxiliam nessa tarefa, como o Parcel, 
 o Webpack e o Vite.
*/

/*
O Vite fornece ferramentas de desenvolvimento para nossa aplicação, 
como, por exemplo, um servidor de desenvolvimento 
(também comumente chamado de dev-server) e um bundler para compilação final da aplicação.

Para utilizar o dev-server, basta executar o comando no terminal:
*/

//npx vite --open

/*
 Ao executar o comando, o Vite irá criar um servidor local e executar a 
 aplicação que se encontra no arquivo index.html.
 É importante se certificar de que esse arquivo está na raiz da aplicação.

 Observe que agora o erro anterior não aparece mais no navegador e o 
 console.log() mostra corretamente a senha gerada pela biblioteca nanoid.
*/

/*
import { nanoid } from 'nanoid'


const passwordBtnEl = document.querySelector('button');

const displayPasswordEl = document.querySelector('h2');


passwordBtnEl.addEventListener('click', () => {

  const randomPassword = nanoid();

  displayPasswordEl.innerHTML = randomPassword;

});
*/

/*No código acima estamos adicionando um event listener ao botão para que, 
ao ser clicado, ele altera o texto do h2, adicionando o valor gerado pela 
biblioteca nanoid.
*/
