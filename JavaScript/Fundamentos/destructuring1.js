// destructuring com Objeto que no caso é com {}

let produto = { nome:'celular', preco: 899.90} // obj simples
const {nome,preco} = produto // const{} e coloca o nome da variavel que esta dentro do obj
console.log(`Primeiro exemplo: ${nome}, ${preco}`)



/******************************************** */
//Outro exemplo

const{nome:n,preco:p} = produto // nome:n(Esta pegando o nome da variavel 'nome' dois pontos de atribuição, como se fosse um '=' e declara o novo nome da variavel que no caso é o 'n', Mesma coisa com o preco:p.)
console.log(`Segundo ex: ${n}, ${p}`)


/********************************************/
// Destructuring ele simplesmente extrai um valor de um objeto e transforma o valor do objeto em uma variavel, assim fica mais facil de chamar o valor. Para chamar o nome celular, eu teria que escrever produto.nome p/ printar o elemento que esta dentro de nome. 
//ex: console.log(produto.nome)

/********************************************/
{// coloquei essa chave para constante ficar em um escopo diferente.Ja que existe duas variaveis com o mesmo nome(nome):p
const pessoa = { nome:'Cesar', idade : 65, endereco:{rua:'av lorem ipsum',cidade:'Lorem', estado:'IS'}}
const {endereco:{cidade:c,estado:e}} = pessoa // nesse ex, eu peguei duas variaveis dentro de um objeto
const {nome} = pessoa
console.log(nome)
console.log(`Cidade: ${c}/${e}`)
}