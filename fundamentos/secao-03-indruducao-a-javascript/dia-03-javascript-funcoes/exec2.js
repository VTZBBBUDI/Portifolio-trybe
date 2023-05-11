let clienteTrybeBank = ['Gus'];

function cumprimentaCliente(cliente) {
  return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
}

console.log(cumprimentaCliente(clienteTrybeBank));

let status = 'deslogado'

function logardeslogar() {
    if(status === 'deslogado') {
        status = 'logado';
    } else {
        status = 'deslogado'
    }
}

console.log(status)

logardeslogar();
console.log(status);

logardeslogar();
console.log(status);

console.log('O usuário ' + clienteTrybeBank + ' está ' + status + ' no sistema TrybeBank');