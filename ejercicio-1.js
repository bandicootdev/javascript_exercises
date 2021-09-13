const string = "Hola Mundo";
const string2 = "Hola que tal";

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const stringToLength = (string) => {
    return string.length;
}

console.log(stringToLength(string));

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const chunkString = (string, lgn) => {
    if (!lgn) {
        throw new Error('longitude is required')
    }
    return string.substr(0, lgn)
}

console.log(chunkString(string, 4));

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const stringToArray = (string) => {
    return string.split(' ');
}

console.log(stringToArray(string2));

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repeatText = (string, lng) => {
    return `${string} `.repeat(lng)
}

console.log(repeatText(string, 3));

