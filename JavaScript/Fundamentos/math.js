const raio = 5.6
const area = Math.PI * Math.pow(raio, 2) // Math esta colocando o valor de PI=> (pi*5.6²) <= e jogando a potencia de 2 com o pow(potencia)

const x = 3.9
console.log(Math.ceil(x)) // arredonda o valor de x p/ cima de 3.9 para 4
console.log(Math.floor(x)) // arredonda o valor de x p/ baixo de 3.9 p/ 3
//ambos tiram as casas decimais.

console.log(area)
console.log(area.toFixed(1)) //toFixed reduz as casas decimais para 1 como esta no exemplo
console.log(typeof Math) // Math é um objeto padrao do JS
