/*
Objetos são estruturas ou coleções compostas de pares chave-valor. 
É possível armazenar qualquer tipo de dado, até mesmo armazenar um objeto dentro de outro ou até mesmo dentro de um array. 
Com isso, objetos são estruturas de armazenamento de dados muito poderosas.
*/

const car = {
  brand: 'Fiat',
  model: '500',
  color: 'White',
  weight: 1061,
};

/* Para acessar as chaves dentro de um objeto, há dois modos:
• Dot Notation (Notação de ponto): car.brand;
• Bracket Notation (Notação de colchetes): car['brand'].
*/

/*
 Objeto dentro de objeto:
   Manipulação de objeto dentro de objeto, que a partir de agora chamaremos de objetos aninhados,
   é algo muito comum no desenvolvimento de software, 
   pois nos dá a possibilidade de representar melhor as informações.
   No objeto account abaixo, o valor da chave bank guarda outro objeto:
*/

const account = {
  agency: '0975',
  bank: {
    cod: '012',
    id: 4,
    name: 'TrybeBank',
  },
};

//Para acessar o objeto bank, devemos antes acessar o objeto account:

// Com notação por ponto
console.log(account.bank); // Resultado do log: {cod: '012', id: 4, name: 'TrybeBank'}

// Com notação por colchetes
console.log(account['bank']); // Resultado do log: {cod: '012', id: 4, name: 'TrybeBank'}

/*
Se você quiser acessar o valor da propriedade name que está dentro da propriedade bank,
será preciso acessar o objeto account primeiro, seguido do objeto bank, 
seguido da propriedade name:
*/

// Com notação por ponto
console.log(account.bank.name); // Resultado do log: TrybeBank

// Com notação por colchetes
console.log(account['bank']['name']); // Resultado do log: TrybeBank

/*
 Objeto dentro de objeto dentro de objeto
Neste outro exemplo, veja como acessamos as informações de modo encadeado:
*/

const user = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  info: {
    name: 'Jake',
    lastName: 'Peralta',
    address: {
      street: 'Rua Dalvo Trombeta, 357 - Fundos',
      district: 'Xererê',
      city: 'Santana do Livramento',
      state: 'Rio Grande do Norte',
    },
  },
};
console.log(user['id']); // 99
console.log(user.email); // jakeperalta@gmail.com
console.log(user.info.address.street); // Rua Dalvo Trombeta, 357 - Fundos
console.log(user['info']['address']['city']); // Santana do Livramento

/*
 Podemos “ler” o objeto user da seguinte forma:

O objeto desse exemplo tem a chave info, cujo valor é outro objeto que possui três chaves, 
uma delas sendo address, que é outro objeto. 
Ou seja, o objeto user possui outros dois objetos dentro dele.
*/

/*
 Objeto dentro de um array

Agora, e se o objeto estiver dentro de um array, como acessar as propriedades dele?
Esse bloco de código é um exemplo de um array composto de objetos. 
Esses objetos podem ser acessados por meio de seus índices e armazenados dentro de variáveis para facilitar a compreensão.
    De olho na dica 👀: Se o objeto estiver dentro de um array, ele será acessado por meio de seu índice,
     assim como uma informação seria acessada em um array de strings.
*/

const residents = [
  {
    name: 'Luíza',
    lastName: 'Guimarães',
    floor: 10,
    apartment: 1005,
  },
  {
    name: 'William',
    lastName: 'Albuquerque',
    floor: 5,
    apartment: 502,
  },
  {
    name: 'Murilo',
    lastName: 'Ferraz',
    floor: 8,
    apartment: 804,
  },
  {
    name: 'Zoey',
    lastName: 'Brooks',
    floor: 1,
    apartment: 101,
  },
];

const firstResident = residents[0];
console.log(firstResident); // Resultado do log: { name: 'Luíza', lastName: 'Guimarães', floor: 10, apartment: 1005 }
//E se você precisar acessar a propriedade que guarda o valor do andar que a pessoa mora?
console.log(firstResident.floor); // Resultado do log: 10

//E como descobrir quem é o último residente do array?
const lastResident = residents[residents.length - 1];
console.log(lastResident); // Resultado do log: { name: 'Zoey', lastName: 'Brooks', floor: 1, apartment: 101 }



//Também é possível fazer operações um pouco mais complexas, como fazer o log de todas as pessoas residentes através do loop for:
for (let index = 0; index < residents.length; index += 1) {
  const resident = residents[index];
  console.log(resident.name);
};