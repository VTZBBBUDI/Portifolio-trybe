/*
Vamos construir um processo de transição de function para arrow function. 
Para essa transição, vamos considerar a função de subtração abaixo:
*/

function subtraction(num1, num2) {
  return num1 - num2;
};

/*
 Passo 1: Arrow functions não possuem nome e são armazenadas em variáveis

Diferente da função normal, a criação de uma arrow function não utiliza a palavra-chave function e não tem nome. 
Ao invés disso, atribuímos ela a uma constante.
*/

const subtraction5 = (num1, num2) {
  return num1 - num2;
};

/*
Caso você queira invocar a função, será pelo nome da constante. Na prática, nada muda. 
Mas é importante que saiba desse conceito, 
pois mais para frente utilizaremos arrow function sem serem atribuídas em uma constante.
*/

/*
Passo 2: Colocando a seta na arrow function =>
*/

const subtraction1 = (num1, num2) => {
  return num1 - num2;
};

//Em algumas situações específicas, podemos simplificar nossa arrow function ainda mais.

/*
Passo 3: Simplificando arrow functions que possuem apenas 1 linha
Podemos otimizar a sintaxe com 3 ações:
*/

const subtraction2 = (num1, num2) => { return num1 - num2 };

/*
Segunda ação pra simplificar: remova as chaves
Uma vez que a seta aponta diretamente para o bloco de execução, ou seja, 
estão na mesma linha, podemos remover as chaves.
*/

const subtraction3 = (num1, num2) => return num1 - num2;

/*
 Mas quando removemos as chaves, caímos em um problema: o que vem depois da seta => obrigatoriamente deve ser uma expression. 
 A instrução return não é uma expressão, é um statement
*/

/*
 Uma expressão é uma instrução que computa algum valor. Exemplo:
  • 5 + 5 é uma expressão, que ao ser computada entrega o valor 10;
  • 10 > 3 é uma expressão, que ao ser computada entrega o valor true;
  • Se você tem a variável let lastName = "Silva" criada e em algum momento a utiliza através de seu nome lastName, 
  • essa utilização é uma expressão, que é computada e entrega o valor "Silva".
*/

/*
 Já statement é uma instrução que executa uma ação ou declara algo. Exemplo:
  • return, executa o retorno de algum valor dentro de uma função;
  • if...else, computa uma expressão que pode levar caminhos de acordo com a condição estabelecida;
  • for, executa um laço de repetição;
  • var, let, const, declara variáveis;
  • function, declara funções.
*/

/*
Terceira ação pra simplificar: remova o return
Quando removemos as chaves { } da nossa arrow function, 
o JavaScript entende que o que virá depois da seta => vai ser retornado obrigatoriamente. 
Chamamos isso de return implícito.
*/

const subtraction4 = (num1, num2) => num1 - num2;
