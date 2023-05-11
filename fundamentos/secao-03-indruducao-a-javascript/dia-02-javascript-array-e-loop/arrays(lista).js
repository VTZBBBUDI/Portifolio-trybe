let tasklist = ['babao', ' mongol', ' anisio']
console.log(tasklist[2]);

console.log(       )

//******************************************PARA ADD NA LISTA************************

let adicionado = ['bola', 'macarrao', 'anisio', 'time ruim de cs'];
adicionado[2] = 'lambisgoia';
console.log(adicionado);

console.log(       )

//****************************************ADICIONAR COM PUSH******************************

let macaco = ['bob', 'alvaro', 'mayonese', 'diego'];
macaco.push('pedrin');
console.log(macaco)

console.log(       )

//*************************************SABER O TAMANHO DA LISTA*************************

console.log(macaco.length);

console.log(       )

//*************************************ORGANIZAR EM ORDEM ALFABETICA *******************
//OBS: TEM QUE COLOCAR O PARENTESES *()*

console.log(macaco.sort())

console.log(       )

//*********************************PARA EXIBIR OS ITENS FORA DE COLCHETES USA A OPERACAO*********

for (let index = 0; index < macaco.length; index += 1) {
    console.log(macaco[index]);
}

console.log(       )

//*************************************** POP E SHIFT ***************************

//O método .pop() permite remover o último item do array.
//Mas, se for necessário remover o primeiro item da lista, é possível usar o .shift(). 

let listao = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
listao.pop();  // remove a última tarefa

console.log(listao);

console.log(       )

let boll = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
boll.shift();

console.log(boll); // remove a primeira tarefa

console.log(       )