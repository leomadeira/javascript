interface Humano{
    nome: string
}

function saudarComOla(pessoa: Humano ){
    console.log(`Olá, ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano ){
    pessoa.nome = 'Leonardo'
}

const pessoa = {
    nome: 'Léo',
    idade: 25
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)

//****************************************/

//SEM INTERFACE

// function saudarComOla(pessoa: { nome: string}){
//     console.log(`Olá, ${pessoa.nome}`)
// }

// function mudarNome(pessoa: {nome: string}){
//     pessoa.nome = 'Leonardo'
// }

// const pessoa = {
//     nome: 'Léo',
//     idade: 25
// }

// saudarComOla(pessoa)
// mudarNome(pessoa)
// saudarComOla(pessoa)