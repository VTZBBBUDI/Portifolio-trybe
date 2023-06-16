// Ao manipular arrays, temos HOFs nativas do JavaScript que iteram pelo array e executam uma determinada ação para cada elemento do array, como:
//forEach: executa uma ação determinada por você para cada item do array e não possui retorno;
//find: encontra o primeiro elemento que satisfaça alguma condição;
//some: retorna true se algum elemento satisfaz alguma condição, caso contrário retorna false;
//every: retorna true se todos os elementos corresponderem a uma condição, caso contrário retorna false.

//As Higher Order Functions são parecidas entre si: elas possuem objetivos diferentes no seu código, mas todas possuem a mesma estrutura.

//A primeira parte de uma HOF é o array a ser iterado e a HOF a ser executada. Por exemplo:
array.hofASerExecutada();

//A HOF recebe como parâmetro uma função callback.

//Anota aí 📝: uma função callback é uma função passada por parâmetro ou executada dentro de outra função. 

// Nesse caso, vamos passar uma função anônima:
array.hofASerExecutada(() => {});

//Anota aí 📝: uma função anônima nada mais é do que uma função sem nome. 

// A função anônima que foi passada por parâmetro pode receber até três parâmetros:

//o primeiro parâmetro é o elemento a ser iterado e é o único obrigatório;

//o segundo parâmetro é o index do elemento atual;

//o terceiro parâmetro é o array original e não é muito comum utilizá-lo.

array.hofASerExecutada((elementoAtual, index, arrayOriginal) => {});

// Por exemplo, o forEach executa uma determinada ação para cada item do array e não retorna nada.

//A estrutura dele é a seguinte:

array.forEach((element, index) => {
  // código a ser executado
});

//O código abaixo possui um array com diversos valores. Observe e execute o código:

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, index) => {
  console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});

//O código acima está organizado da seguinte maneira:

//arrayOfValues: nome do array que será percorrido;

//.forEach: a HOF usada. Poderia ser outra HOF, como .find, .some, .every, entre outras, que a estrutura seria a mesma;

//element: valor do elemento do array;

//(element, index) => { /* código */ }: função a ser executada.

