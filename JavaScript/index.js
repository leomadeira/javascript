 let pessoa = {nome:'Leonardo', falar(){ 
     console.log(`Olá, meu nome é ${this.nome}!`)
    }
}
 
 let sobreNome = (nome) => {
  console.log(`${nome} Madeira`)
}

const {nome} = pessoa
console.log(nome)
console.log(pessoa.nome)
const {falar} = pessoa
console.log(falar)
pessoa.falar()

sobreNome('Leonardo')
