let lado1 = 9;
let lado2 = 7;
let lado3 = 8;

function checkintegerposivite(l1, l2, l3) {
    if (l1 > 0 && l2 > 0 && l3 > 0) {
        return "true";
    }
    else {
            return 'false';
    }
}
console.log(checkintegerposivite(9 ,7 ,8));