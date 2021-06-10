const x = 10
const y = 15
const i = 30
const j = -5

console.log(x>j) // Maior que '>'
console.log(x<j) // Menor que '<'
console.log(x>=j) // Maior ou igual '>='
console.log(x<=j) // Menor ou igual '<='
console.log(x==x) // Igual '=='
console.log(x===x) // identico '==='

console.log('\n') // \n é um quebra linha

console.log(y>=j && x<=y) // e === &&
console.log(y>=j || y<=x) // ou === ||
console.log(!(y>=j)) // ! === NÃO(transforma algo verdadeiro em falso)
console.log(!(i<=x)) // ! === NÃO(tbm deixa algo falso como verdadeiro)

console.log('\n') // \n é um quebra linha

let nome = '' // Não tem nome assim o valor de baixo vai lançar o nome desconhecido
console.log(nome || 'Desconhecido')
//**************************************/

let nome2 = 'leo' // aqui eu coloquei um nome, assim o meu nome vai ser printado no lugar de desconhecido
console.log(nome2 || 'desconhecido')

/*********************************** */