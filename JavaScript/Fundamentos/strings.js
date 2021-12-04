const nome = 'Leonardo'

console.log(nome.charAt(4)) // vai me da o 4° número da variável nome(letra a) // COMEÇA COM O NUMERO '0'
console.log(nome.toUpperCase()) // TODAS AS LETRAS EM MAIÚSCULA
console.log(nome.toLowerCase()) // todas as letras em minúscula

const nome2 = 'Maria' //
const nome3 = `José` // Podemos usar tres sinais para declarar uma string. com apenas uma 'x', duas "x" e `x`(crase)
//crase é o meu preferido para eu poder concatenar nem problemas as variaveis com outros elementos.

console.log(nome3 + ' Monteiro') // Não curto muito dessa forma
console.log(`${nome} Madeira`) // Dessa forma acho mais profissional e simples. Que é a forma que a maioria dos programadores usam.

const upper = texto => texto.toUpperCase() // criei uma função que deixa qualquer palavra com letra maiuscula
function lower(texto) {
  // outra forma de criar função, deixando todas as letras em minusculo
  return texto.toLowerCase()
}

console.log(upper(nome))
console.log(lower(nome))
