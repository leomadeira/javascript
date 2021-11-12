// Para ilustrar a desestruturação, faremos um sanduíche. Você tira tudo da geladeira para fazer seu sanduíche? Não, você só tira os itens que gostaria de usar no seu sanduíche.

// A desestruturação é exatamente a mesma. Podemos ter um array ou objeto com o qual estamos trabalhando, mas precisamos apenas de alguns dos itens contidos nele.

// A desestruturação torna fácil extrair apenas o que é necessário.

//# Array Destruction
//Antes
const vehicles = ['mustang', 'f-150', 'expedition']

// old way
const car  = vehicles=[0]
const truck = vehicles=[1]
const suv = vehicles[2]

/**************************** */
//Esta é a nova maneira de atribuir itens de matriz a uma variável:
const vehicles2 = ['mustang', 'f-150', 'expedition']

const [car, truck, suv] = vehicles2
//Ao desestruturar matrizes, a ordem em que as variáveis ​​são declaradas é importante.

// Outro ex:
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles; // a  desestruturação é útil quando uma função retorna uma matriz: