/**************************/
function sobreNome(nome) {
  console.log(`${nome} Madeira`)
}
sobreNome('Leonardo')
console.log(typeof sobreNome)

/**************************/
const cliente = {
  nome: 'José',
  idade: 80,
  peso: 70,
  altura: 1.55,
  endereco: { cidade: 'Macapá', estado: 'Amapá' }
}
console.log(typeof cliente)
/**************************/

const obj1 = {}
obj1.nome = 'Léo'
obj1.idade = 24
console.log(obj1)

/**************************/
function NewObj(nome) {
  this.nome = nome
}
newobj1 = new NewObj('Dayane')
newobj2 = new NewObj('Carlos')
console.log(newobj1)
console.log(newobj2)

/**************************/
