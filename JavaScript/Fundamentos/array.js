const array = [1,2,3,4] // array sempre fica entre >[]< colchetes

console.log(array[0]) // printa o primeiro valor da array(que no caso é o numero 1)//lembrando que sempre começa com 0

array[4] = 5 // coloquei mais um numero no indice 4 o valor 5 na array
console.log(array) // aqui mostra que um novo valor foi colocado

console.log(array.length)//mostra o ultimo valor da array

array.push(6) // esta empurrando um novo valor na array. push ele joga no ultimo espaço da array, diferente do primeiro, que pode escolher em que fila o numero 5 pode ficar

console.log(array.length)//mostra o ultimo valor da array

console.log(array)

console.log(array.pop()) // pop remove o ultimo valor da array que no caso é o elemento 6
console.log(array)

delete array[4] // tb deleta um valor, mas deixa um registro que algo foi deletado. isso eu nao curto muito
console.log(array)