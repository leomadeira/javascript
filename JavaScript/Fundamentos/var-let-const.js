// Existe três tipos de variáveis(var, let e const)

var num1 = 10 // Var está no escopo global

let num2 = 20 // Let está no escopo local(Regra: sempre use let ao invés de usar 'var')

const num3 = 30.7545456 // Caso não é necessário mudar o valor de uma variável, por boa prática é melhor usar 'const'

/***********************************************************************************/

var num1 = 50 // Podemos declarar o mesmo nome de uma var para substituir o valor da variavel
num2 = 40 // não pode repetir o let, apenas colocar o num2 e o novo valor da variável, senão vai da erro no código
//num3 = 50 // não dá para mudar o valor de uma constante, ela sempre será 30.

console.log(num1,num2)

console.log(typeof num1) //''typeof'' diz qual é o tipo da variavel(se é Number, string, boolean)

console.log(num3.toFixed(2)) // toFixed reduz a quantidade de casas decimais o teu print vai ter. no caso eu coloquei 2 e so vai aparecer 30.75. 
console.log(num3.toString(2)) // toString(2) transforma o valor em binário