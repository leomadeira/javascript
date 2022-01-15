//# HERANÇA
//Para criar uma herança de classe, use a extends palavra - chave.
//Uma classe criada com uma herança de classe herda todos os métodos de outra classe:
class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  class Model extends Car { // Criar uma class com o nome Model e ira estender tudo que tem em Car
    constructor(name, mod) {
      super(name); //O super() método se refere à classe pai. //Ao chamar o super()método no método do construtor, chamamos o método do construtor do pai e obtemos acesso às propriedades e métodos do pai(Car).
      this.model = mod;
    }  
    show = () => `${this.present()} , it is a  ${this.model}` // Posso fazer a função desta forma tbm
  }
const mycar = new Model("Ford", "Mustang"); //Model no lugar de Car 
console.log(mycar.show()) //Show no lugar de present
//document.write(mycar.show()) //Desta forma printa no browser
