// Para ilustrar a desestruturação, faremos um sanduíche. Você tira tudo da geladeira para fazer seu sanduíche? Não, você só tira os itens que gostaria de usar no seu sanduíche.

// A desestruturação é exatamente a mesma. Podemos ter um array ou objeto com o qual estamos trabalhando, mas precisamos apenas de alguns dos itens contidos nele.

// A desestruturação torna fácil extrair apenas o que é necessário.

//# Array Destruction
//Antes
const vehicles = ['mustang', 'f-150', 'expedition']

// old way
const car  = vehicles[0]
const truck = vehicles[1]
const suv = vehicles[2]

/*****************************/

//Esta é a nova maneira de atribuir itens de matriz a uma variável:
const vehicles2 = ['mustang', 'f-150', 'expedition']

const [car2, truck2, suv2] = vehicles2
//Ao desestruturar matrizes, a ordem em que as variáveis ​​são declaradas é importante.

// Outro ex:
const vehicles3 = ['mustang', 'f-150', 'expedition'];

const [car3,, suv3] = vehicles3; // a  desestruturação é útil quando uma função retorna uma matriz:

//****************************************************/

//Esta é a nova maneira de usar um objeto dentro de uma função:
const vehiclesClassFunc = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'Car',
    yaer: 2021,
    color: 'Red'
}

myVehicle(vehiclesClassFunc);
function myVehicle({type, color, brand, model}) {
    const message = `My ${type} is a ${color} ${brand} ${model}`
}


//Outro exemplo:
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
   }
}
  
myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message =  `My ${model} is registered in ${state}`;
}
