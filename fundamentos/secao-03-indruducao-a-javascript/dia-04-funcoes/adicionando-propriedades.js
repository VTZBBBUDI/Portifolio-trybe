/*
 É muito comum termos a necessidade de adicionar novas propriedades a objetos. 
 Vamos ver como fazer isso?

 Suponha que você fique responsável por cadastrar clientes de uma loja.
 Para salvar as informações de cada cliente, você criou um objeto como o deste exemplo:
*/

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

/*
  O objeto tem as propriedades firstName, age e job. Porém, você se esqueceu de adicionar a propriedade lastName.

  E agora, como é possível adicionar uma nova propriedade ao objeto? 🤔
  
  Para isso, basta atribuir a ela um valor com a chave desejada. 
  Caso a propriedade acessada ainda não exista no objeto, ela será criada automaticamente. 
  Portanto, caso seja necessário adicionar a propriedade lastName ao objeto, a notação em ponto ou a em colchetes pode ser utilizada.
*/

const customer2 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};
customer.lastName = 'Faria';
console.log(customer2); 

customer['lastName'] = 'Silva';
console.log(customer2);

/*
 Adicionar propriedades através de função

 Agora, suponha que, após terminar de adicionar o lastName da pessoa no objeto, 
 sua liderança lhe informa que será necessário adicionar também a naturalidade (birthPlace),
 a data de nascimento (birthDate) e o estado civil (maritalStatus).
*/

/*
 Como você faria? 🤔

 Nós podemos utilizar a notação de colchete ou de ponto, 
 mas é uma ótima oportunidade para utilizarmos duas boas práticas de código: 
 criar códigos reaproveitáveis e semânticos.

 Nós conseguimos criar uma função responsável por adicionar novas propriedades a um objeto apenas caso elas não existam. 
 Dessa forma podemos adicionar quantas propriedades quisermos, de forma dinâmica, sem sobrescrever nenhuma informação.

 No nosso exemplo, a função deve receber três parâmetros:
    1.O objeto a ser trabalhado;
    2.Uma nova chave a ser adicionada;
    3.O valor dessa chave.
*/

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

// Criação da função
const addProperty = (object, key, value) => {
  if (typeof object[key] === "undefined"){
    object[key] = value;
  }
};

// Chamada da função passando os valores dos parâmetros
addProperty(customer, 'birthPlace', '19/07/1932');

// Exibe o objeto transformado
console.log(customer);

/*
Agora, sempre que você quiser adicionar uma nova propriedade sem correr o risco de substituir algum valor existente, 
basta chamar a função addProperty e passar os valores dos parâmetros necessários.
*/