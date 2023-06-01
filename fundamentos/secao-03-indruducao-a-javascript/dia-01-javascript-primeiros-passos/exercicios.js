//Exercicio 1//
console.log(1+2);
console.log(1-2);
console.log(1*2);
console.log(12/6);
console.log(19%5);

console.log(  );
//Exercicio 2//
let exerc2 = 5;
let exerc22 = 4;
if (exerc2 < exerc22) {
  console.log('gozei');
} else {
  console.log('n gozei');
};

console.log(  );

//Exercicio 3//
let exerc3 = 10;
let exerc33 = 150;
let exerc333 = 10;
if (exerc3 >= exerc33 && exerc3 >= exerc333) {
  console.log(exerc3);
} else if (exerc33 >= exerc3 && exerc33 >= exerc333) {
  console.log(exerc33);
} else {
  console.log(exerc333);
};

console.log();

//Exercicio 4//
let exerc4 = 10;
let exerc44 = 30;
let exerc444 = 160;

function verificartriang(exerc4, exerc44, exerc444) {
  if (exerc4 > 0 && exerc44 > 0 && exerc444 > 0) {
    let triangulo = exerc4 + exerc44 + exerc444;
    if (triangulo === 180) {
      return true;
    }  else {
      return false;
    }
  }
}

let resultado = verificartriang(exerc4, exerc44, exerc444);
console.log(resultado);

console.log();

//Exercicio 5//
function obterMovimentosPeca(nomePeca) {
  switch (nomePeca.toLowerCase()) {
    case "rei":
      return "O rei pode se mover em qualquer direção, mas apenas uma casa por vez.";
    case "rainha":
      return "A rainha pode se mover em qualquer direção e em qualquer número de casas.";
    case "torre":
      return "A torre pode se mover horizontalmente e verticalmente em qualquer número de casas.";
    case "bispo":
      return "O bispo pode se mover diagonalmente em qualquer número de casas.";
    case "cavalo":
      return "O cavalo pode se mover em forma de L, pulando duas casas em uma direção e uma casa em outra direção.";
    case "peão":
      return "O peão pode se mover para frente uma casa, mas no primeiro movimento pode avançar duas casas. Ele captura diagonalmente.";
    default:
      return "Erro: Peça inválida.";
  }
}

let nomePeca = "torre";
let movimentos = obterMovimentosPeca(nomePeca);
console.log(movimentos);

//Exercicio 6//
