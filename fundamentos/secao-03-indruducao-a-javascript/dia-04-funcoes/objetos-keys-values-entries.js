/*
 Object.keys( )

 E se, por um acaso, eu precise listar somente as chaves de um objeto. Como eu faria isso? 🤔

 A forma mais robusta e elegante de fazer isso é através do método Object.keys()!

 Object.keys() retorna um array onde os elementos são os nomes das propriedades (chaves 🔑) em forma de strings. 
 A ordenação destes elementos é a mesma do objeto original. 
*/

// Sintaxe:
Object.keys('objeto que você deseja listar as chaves');

//Fantástico, não é mesmo? Vamos ver um exemplo:
const product = {
  name: 'Ruffles Original - 76g',
  price: 8.59,
  company: 'Elma Chips',
  nutritionInfo: {
    carbohydrates: 12,
    sugar: 0,
    sodium: 129,
  }
};

console.log(Object.keys(product)); // [ 'name', 'price', 'company', 'nutritionInfo' ]

/*
Object.values( )

O Object.values() segue a mesma lógica do Object.keys().
A diferença é que este retorna um array que contém os valores das propriedades do objeto. 
Voltando ao exemplo anterior, como faríamos para retornar os valores de cada propriedade do objeto product em um array?
*/

console.log(Object.values(product));
/*
[
  'Ruffles Original - 76g',
  8.59,
  'Elma Chips',
  { 
    carbohydrates: 12, 
    sugar: 0, 
    sodium: 129 
  }
]
*/

/*
Object.entries( )

No caso do Object.entries, ele retorna um array de arrays, 
no qual cada conjunto tem a chave e o valor do objeto. 
Observe o exemplo a seguir:
*/

console.log(Object.entries(product));

/*
[
  [ 'name', 'Ruffles Original - 76g' ],
  [ 'price', 8.59 ],
  [ 'company', 'Elma Chips' ],
  [ 'nutritionInfo', { carbohydrates: 12, sugar: 0, sodium: 129 } ]
]
*/

/*
 Como você pode perceber, ao aplicar o Object.entries nesse objeto, o retorno foi um array de arrays. 
 A forma como isso fica nítido é que nós temos um array abrindo com colchete [ e na linha de baixo já tem outro colchete. 
 Como cada colchete abrindo representa um array, é possível saber que temos um array com arrays dentro.

 A primeira entrada de cada array é a chave do objeto em formato de string,
 e o segundo elemento é o respectivo valor, que pode ser uma string ou outro tipo de dado. 
 Por exemplo, o valor de price é um dado do tipo number.
*/