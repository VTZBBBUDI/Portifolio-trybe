let comida = 'pão na chapa';
let bebida = 'café';

if (bebida === 'café' && comida === 'pão na chapa') {
  console.log('Muito obrigado(a) pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

//sssssssssssssssssssssssssssssssssssssssssssssss

let conditionOne = true;
let conditionTwo = false;

console.log(conditionOne && conditionTwo);

//sssssssssssssssssssssssssssssssssssssssssssssss

let cenouras = true;
let leite = true;
let arroz = true;
let feijao = true;

let listaDeCompras = cenouras && leite && arroz && feijao;

console.log(listaDeCompras);

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//sssssssssssssssssssssssssssssssssssssssssssssss

console.log(10 + 5 * 5); // 10 + 25

//sssssssssssssssssssssssssssssssssssssssssssssss

let currentHour = 2;
let message ;
if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour >= 11 && currentHour < 14) {
  message = 'Hmmm, cheiro de café recém-passado';
}
console.log(message)

//ssssssssssssssssssssssssssssssssssssss

let bebidaPrincipal =  'café';
let bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'café' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado(a) por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

//ssssssssssssssssssssssssssssssssssssssssssssssssssss

let weekDay = 'sabado'
if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D')
} else {
  console.log('FINALMENTE, descanso merecido! UwU!')
}

//ssssssssssssssssssssssssssssssssssssssssssssssss

console.log(!(2 + 2) === 4);
console.log((2 + 2) === 4);