const product = '1 iphone 32';
const price = 50000;
const discount = 30;

const message = 
`Produto: ${product}
Preço: ${price}
Desconto: ${discount}%
Preço com desconto: R$${(price - (price * (discount / 100))).toFixed(2)}`;

console.log(message);