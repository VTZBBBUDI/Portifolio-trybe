/*
Segundo o MDN, função é um conjunto de instruções que executa uma tarefa ou calcula um valor.
Funções são a forma mais essencial de organização de código e de lógica na programação. Ao utilizá-las, você consegue dividir seu código em blocos lógicos e deixar as coisas mais organizadas.
Com isso, é possível diminuir o tamanho de seu código, diminuir a repetição e tornar mais fácil a leitura e o entendimento, pois a lógica do programa estará bem dividida.
Exemplo de função de boas-vindas à Trybe:
*/

function giveGreeting() {
  return `Olá, boas-vindas à Trybe!`;
};

/*

• function é uma palavra reservada do JavaScript, onde deixamos explícito que iremos declarar uma função;
• giveGreeting é o nome da função. Neste caso utilizamos o nome giveGreeting para deixar nítido que a função irá dar uma saudação;
• () dentro dos parênteses é onde definimos os parâmetros da função. Eles são uma espécie de “variáveis” utilizadas para passar informações para dentro da função, caso necessário;
• { } os colchetes delimitam o escopo da função. É o “corpo” que contém o que a ser executado;
• return é uma palavra-chave reservada do JavaScript que indica que a função deve retornar um valor quando é chamada. Logo após retornado um valor, a função se encerra. No nosso exemplo, estamos retornando a string “Olá, boas-vindas à Trybe!”.

*/
/*

De olho na dica 👀: Funções executam um conjunto de ações. 
Ações, na gramática, são verbos (ex.: pegar, recuperar, formatar, requisitar, apagar, etc). 
Portanto, é uma boa prática dar um nome para a função começando com um verbo. 
Além disso, assim como nas variáveis, as funções também são nomeadas no padrão camelCase. 

*/

/*
Funções com parâmetros
  Qualquer valor pode ser passado como parâmetro em uma função JavaScript. 
  Pode-se passar booleanos, arrays e outros valores, até mesmo outras funções, como parâmetro.
  No exemplo a seguir, há uma lista de pessoas clientes do TrybeBank salva em um array. 
  Vamos passá-la como parâmetro de nossa função.
*/

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
function greetCustomer(customer) {
  return `Olá, ${customer}. Essa é sua conta do TrybeBank.`;
};
console.log(greetCustomer(trybeBankCustomers)); // Olá, Oliva,Nat,Gus. Essa é sua conta do TrybeBank.

//E se eu quisesse mandar uma mensagem individual para cada pessoa cliente?? 

const trybeBankCustomers2 = ['Oliva', 'Nat', 'Gus'];

function greetCustomer(customer) {
  for (let index = 0; index < customer.length; index += 1) {
    console.log(`Olá, ${customer[index]}. Essa é sua conta do TrybeBank.`);
  }
};
greetCustomer(trybeBankCustomers2);

/*
Nesse caso, como utilizamos console.log() dentro da função, 
não foi preciso usar return nem fazer a chamada da função dentro de um console.log() para imprimir.
*/