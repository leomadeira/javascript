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