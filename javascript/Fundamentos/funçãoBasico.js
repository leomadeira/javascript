function soma1(x, y) {
  return x + y // retornei o valor de x+y por isso que em baixo coloquei um console.log para mostrar o valor
}
console.log(soma1(2, 2))

function soma2(x, y) {
  console.log(`${x} + ${y} = ${x + y}`) // desta forma posso chamar a função logo abaixo
}
soma2(5, 5) // chamando a função

/***************************************************************/

const imprimirSoma = function (x, y) {
  // mais uma forma de criar uma função
  console.log(x + y)
}
imprimirSoma(50, 50)

/***************************************************************/
/***********  Outra forma de criar função(arrow)   *************/
let soma3 = (x, y) => x + y // farma abreviada para criar uma função
console.log(soma3(4, 4))

let soma4 = (x, y) => console.log(`${x} + ${y} = ${x + y}`) // forma que eu recomendo criar uma função, mais simples e objetiva
soma4(15, 15)

// esse tipo de função deve ser criado quando a função só deve ter uma linha, e não precisa colocar um return para retornar o valor. desta forma a função já retorna automaticamente sem as chaves('{}').
