const pessoa = { nome: 'Leonardo', idade: 24, peso: 70, altura: 1.69 }

console.log(pessoa.nome)

const produto = { nome: 'Celular', preco: 1499.99 }
produto.desconto = produto.preco - (produto.preco * 0.2).toFixed(2) // calculo para da um desconto de 20%
console.log(produto)
