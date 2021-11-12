class Car {
    constructor(name){
        this.brand = name;
    }

    presente(){
        return `I have a ${this.brand}`
    }
}

//Obs:
//A função construtora é chamada automaticamente quando o objeto é inicializado.

const mycar = new Car("Lamborghini");
console.log(mycar.presente());

//Como você pode ver no exemplo acima, você chama o método referindo-se ao nome do método do objeto seguido por parênteses (os parâmetros ficariam dentro dos parênteses).