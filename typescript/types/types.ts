//string
let nome: string = 'Léo'
// nome = 25
console.log(nome)

//numbers
let idade: number = 25
idade = 24.5
console.log(idade)

//boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

//array
let hobbies: any[] = ["Jogos","Cozinhar","Correr"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 20, 30]
console.log(hobbies)

//tuplas

let endereco: [string, number] = ["Av. Lorem Ipsum", 144]
endereco = ["Rua Lorem Ipsum", 563]
console.log(endereco)

//enums

enum Cor {
    Cinza,    //0
    Verde,    //1
    Azul,     //2
    Laranja,  //3
    Amarelo,  //4
    Vermelho, //5
    Roxo = 10,//10 Observe que mudei o valor da key do objeto
    Branco    //11
}

let minhaCor: Cor = Cor.Verde
console.log(Cor.Azul)
console.log(Cor.Roxo)
console.log(Cor.Branco) 

//any

let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2009}

//função

function retornaMeuNome(): string{
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void{
    console.log('Oi')
}
digaOi()

function multiplicar(n1: number, n2: number): number{
    return n1*n2
}

console.log(multiplicar(5,5))

//objetos

let usuario: { nome: string, idade: number } = {
    nome: 'Leonardo',
    idade: 25
}

console.log(usuario)

usuario = {
    idade: 35,
    nome: 'Madeira'
}
console.log(usuario)

//checando tipos

let valor = 30

if(typeof valor === "number"){
    console.log('é um number')
} else{
    console.log(typeof valor)
}

//never

function falha(msg: string): never{
    //while(true)
    throw new Error(msg)
}

const produto ={
    nome:'Sabão',
    preco: 4,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome')
        }
        if(this.preco <=0) {
            falha('Preço inválido!')
        }
    }
}

produto.validarProduto()

//null

let altura = 12
//altura = null

let alturaOpcional: null | number = 12
alturaOpcional= null
type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '0000-0000',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null
//podeSerNulo = 12
console.log(podeSerNulo)
//podeSerNulo = 'abc'
console.log(podeSerNulo)