const string = "Hola Mundo";

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const reverseString = (string) => {
    return string.split('').reverse().join('')
}

console.log(reverseString(string))

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const countPhrase = (string, stringSearch) => {
    return string.split(' ').filter((e) => e.toUpperCase() === stringSearch.toUpperCase()).length;
}

console.log(countPhrase(`${string} adios mundo`, 'mundo'));

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true

const stringIsPalindrome = (string) => {
    return string === string.split('').reverse().join('');
}

console.log(stringIsPalindrome('salas'))

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const reorganizeString = (string, del) => {
    return string.split(' ').map((e)=>`${e} `.replace(del,'')).join('')
}

console.log(reorganizeString("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))