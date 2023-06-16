//forEach é uma HOF que percorre o array e executa uma função para cada um dos seus valores e não retorna nada.
//Existem outras HOFs que iteram pelos arrays e retornam valores, como outros arrays ou booleanos. 
//O forEach é responsável por executar uma ação em cada elemento do array, mas não possui retorno.

//Por exemplo, para transformar um array de pessoas aprovadas em um concurso para letras maiúsculas, você pode fazer o seguinte:
//💻 Primeiro passo: Crie a estrutura do forEach.
const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes
pessoasAprovadas.forEach(() => {});

//💻 Segundo passo: Passe os parâmetros nome e index na callback.
const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes
pessoasAprovadas.forEach((nome, index) => {});

//💻 Terceiro passo: Crie a lógica dentro do forEach utilizando a função toUpperCase().
//Você pode acessar cada item do array pessoasAprovadas e transformar cada nome em maiúsculo.
const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

pessoasAprovadas.forEach((nome, index) => {
  pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase(); // acessa cada elemento do array e atualiza para letra maiúscula
});
console.log(pessoasAprovadas); // ['ANA BEATRIZ', 'CAIO NUNES', 'AFONSO RIBEIRO', 'LEONARDO LINS']

//Observação 🔎: perceba que o tipo de dado do array pessoasAprovadas continua sendo um array. 
//Por isso, podemos utilizar a const, já que não estamos reatribuindo valores. 
//Seria o mesmo que acessar cada item do array e transformá-lo em letra maiúscula. 

/*Por exemplo:*/ pessoasAprovadas[0].toUpperCase();. 

//Agora imagine que você tenha desenvolvido um programa para fazer a tabuada do 2.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((element) => {
  console.log(element * 2); // 0, 2, 4, 6, 8, 10, 12, 14, 16, 18
});
// No exemplo acima, para cada item do array numbers, o forEach executa um console.log com a multiplicação do elemento atual do array por 2.

//Você também pode deixar esse código em apenas uma linha. Para isso, basta remover as chaves {} e deixar o console logo após a arrow. 
//Observe o exemplo abaixo:
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((element) => console.log(element * 2));

//Você também pode separar a callback do forEach em uma outra função. Veja o exemplo abaixo:

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const multiply = (element) => console.log(element * 2);
numbers.forEach(multiply);

