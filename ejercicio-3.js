// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const numRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(numRandom(501,600))