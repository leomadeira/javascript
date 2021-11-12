// Existem muitos métodos de array JavaScript.
// Um dos mais úteis no React é o .map() método array.
// O .map()método permite que você execute uma função em cada item do array, retornando um novo array como resultado.
// No React, map()pode ser usado para gerar listas.

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

//Esse metodo criará uma lista em html os valores que estão dentro da myArray respectivamente.