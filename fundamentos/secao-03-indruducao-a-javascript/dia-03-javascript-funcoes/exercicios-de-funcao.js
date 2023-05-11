function cumprimentaCliente(cliente) {
  return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
};

console.log(cumprimentaCliente('babao'));


let saldo= 200;
function somasaldo(valor) {
    return valor + saldo;
};
function subtraiasaldo(valor) {
    return saldo - valor;
};

function multiplicasaldo(valor) {
    return valor * saldo;
};

function dividesaldo(valor) {
    return saldo / valor;
};

console.log(somasaldo(300));

console.log(subtraiasaldo(50));

console.log(multiplicasaldo(2));

console.log(dividesaldo(5));