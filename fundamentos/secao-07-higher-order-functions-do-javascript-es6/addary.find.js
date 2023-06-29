/*
A função find é utilizada para achar o primeiro elemento que 
satisfaça a condição passada e retorne o primeiro valor do 
array que corresponda a essa condição.

Caso ele não encontre, ele retorna undefined.
*/

/*
Por exemplo, considere um array de objetos, onde cada objeto 
representa uma pessoa colaboradora da sua empresa. 

A pessoa responsável pelo RH precisa encontrar a pessoa 
colaboradora de id 2 pois recebeu uma notificação que esta 
pessoa irá entrar em férias. 

Sua tarefa é encontrar o nome dessa pessoa colaboradora. 

Como você faria? 🤔

O find poderia te ajudar nessa tarefa! Observe e execute o exemplo abaixo:
*/

/*
const employees = [
  { id: 1, nome: 'Douglas Adams', idade: 20},
  { id: 2, nome: 'H. G. Wells', idade: 18},
  { id: 3, nome: 'Júlio Verne', idade: 57},
  { id: 4, nome: 'Margaret Atwood', idade: 83},
  { id: 5, nome: 'Edgar Allan Poe', idade: 19},
];

employees.find((employee) => employee.id === 2).nome; // H. G. Wells
*/