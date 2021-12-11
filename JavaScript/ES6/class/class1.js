// Uma classe é um tipo de função, mas em vez de usar a palavra function- chave para iniciá-la, usamos a palavra-chave classe as propriedades são atribuídas dentro de um constructor()método.

//Constructor de classe simples
class Car {
    constructor(name){  //constructor(CONSTRUTOR)
        this.brand = name; // brand(MARCA)
    }
}

//Obs:
//Observe o caso do nome da classe. Começamos o nome, "Carro", com um caractere maiúsculo. Esta é uma convenção de nomenclatura padrão para classes.

//Crie um objeto chamado "mycar" com base na classe Car:
const mycar = new Car("Lamborghini");

//****************************************************************************************************************************/
//# Herança de classe #//


