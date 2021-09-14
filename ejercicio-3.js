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

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n)

const factorial = (num) => {
    let con = 1;
    let acc = 5;
    while (con < num) {
        acc = acc * con;
        con++
    }
    return `Factorial for ${num} is ${acc}`
}

console.log(factorial(5))

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const primeNumber = (num) => {
    let i = 2;
    let prime = true;
    do {
        if ((num % i) === 0) {
            prime = false;
        }
        i++;
    } while (i < num)
    return prime

}

console.log(primeNumber(3))