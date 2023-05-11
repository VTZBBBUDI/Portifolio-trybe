let n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);

//teração 1: resultado é atualizado para 100 - 0 = 100. index é incrementado para 1.
//Iteração 2: resultado é atualizado para 100 - 1 = 99. index é incrementado para 2.
//Iteração 3: resultado é atualizado para 99 - 2 = 97. index é incrementado para 3.
//Iteração 4: resultado é atualizado para 97 - 3 = 94. index é incrementado para 4.
//Iteração 5: resultado é atualizado para 94 - 4 = 90. index é incrementado para 5.
//Iteração 6: resultado é atualizado para 90 - 5 = 85. index é incrementado para 6.
//Iteração 7: resultado é atualizado para 85 - 6 = 79. index é incrementado para 7.
//Iteração 8: resultado é atualizado para 79 - 7 = 72. index é incrementado para 8.
//Iteração 9: resultado é atualizado para 72 - 8 = 64. index é incrementado para 9.
//Iteração 10: resultado é atualizado para 64 - 9 = 55. index é incrementado para 10.
//O loop termina, e o valor final de resultado é 55, que é impresso no console.