// destructuring com array que no caso é com []

const [a] = [10] // array simples com destructuring
console.log(a)

const [b, c, d, e] = [4, 6, 7, 2]
console.log(b) // B pegou apenas o primeiro elemento
// observe que desta forma, criamos varios nomes de viriaveis e varios dados. assim não precisamos criar varios consts.

const [[x, y], [j, i]] = [
  [9, 4],
  [5, 3]
] // aqui um ex simples de uma matriz
console.log(x)
console.log(i)
