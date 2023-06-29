/*
As Higher Order Functions, ou HOFs, são funções que usam outras
funções em suas operações, ou seja, as HOFs aceitam outras 
funções como parâmetro e/ou retornam outra função.
*/

/*
const button = document.querySelector('#signup-button');

button.addEventListener('click', () => {
  console.log('Registrado com sucesso!');
});
*/

/*
Esse código em JavaScript atribui o elemento HTML com o ID
"signup-button" à variável chamada "button" usando o método
querySelector. 

Em seguida, adiciona um ouvinte de eventos ao botão que é 
acionado quando ocorre um clique no botão

Quando o botão é clicado, a função de retorno de chamada é 
executada. 

Neste caso, a função exibe a mensagem "Registrado com sucesso!" no console usando console.log.

////////////////////////////////////////////

(querySelector() Retorna o primeiro elemento descendente do 
elemento em que a função foi invocada e que corresponde aos 
seletores especificado.)
*/

//Perceba que a função addEventListerner é uma HOF, porque ela recebe outra função como parâmetro.

/*
Para deixar o código mais organizado, você pode separar a 
função executada ao clicar no botão e salvá-la em uma variável. 

Observe o exemplo abaixo:
*/

/*
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);
*/