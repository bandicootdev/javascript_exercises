// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const numRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(numRandom(501, 600))

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const numCapicua = (num) => {
    let inverse = 0;
    let aux = num;

    while (aux !== 0) {
        const ci = (aux % 10);
        inverse = (inverse * 10 + ci);
        aux = Math.floor(aux / 10);
    }
    return num === inverse;
}

console.log(numCapicua(2002))