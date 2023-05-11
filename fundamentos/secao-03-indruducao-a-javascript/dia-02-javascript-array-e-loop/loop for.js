//Tabuada
let numero = 4;

//for (inicialização; condição de repetição; incremento/decremento) {}

for (let contador = 1; contador <=10; contador += 1) {
    console.log(numero * contador);
}

console.log(       )

//PARA STRINGS

let strings = ['paula', 'luis', 'lambisgoia', 'rafael', 'lambebola'];

for (let indice = 0; indice < 5; indice += 1) {
    console.log(strings[indice]);
}

//DE FORMA OTIMIZADA

console.log(       )

let nome = ['paula', 'luis', 'lambisgoia', 'rafael', 'lambebola']
nome.push('lindinho')

for (let index =0; index < nome.length; index += 1) {
    console.log(nome[index])
}