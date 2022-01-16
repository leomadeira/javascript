"use strict";
//string
let nome = 'Léo';
// nome = 25
console.log(nome);
//numbers
let idade = 25;
idade = 24.5;
console.log(idade);
//boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
//array
let hobbies = ["Jogos", "Cozinhar", "Correr"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 20, 30];
console.log(hobbies);
//tuplas
let endereco = ["Av. Lorem Ipsum", 144];
endereco = ["Rua Lorem Ipsum", 563];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 5] = "Vermelho";
    Cor[Cor["Roxo"] = 10] = "Roxo";
    Cor[Cor["Branco"] = 11] = "Branco"; //11
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(Cor.Azul);
console.log(Cor.Roxo);
console.log(Cor.Branco);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2009 };
//função
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(n1, n2) {
    return n1 * n2;
}
console.log(multiplicar(5, 5));
