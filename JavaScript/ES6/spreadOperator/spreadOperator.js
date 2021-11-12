//O operador de propagação do JavaScript ( ...) nos permite copiar rapidamente todo ou parte de um array ou objeto existente em outro array ou objeto.

//Com array
const comidasPreferidas = ['Açaí com tapioca', 'Açaí com Churrasco', 'Açaí com Farinha']
const frutasPreferidas = ['Abacate', 'Banana', 'Pinha']
const todasComidas = [...comidasPreferidas, ...frutasPreferidas]

// console.log(todasComidas)

// O operador de propagação é freqüentemente usado em combinação com a desestruturação.

//Atribua o primeiro e o segundo itens de numbersa variáveis ​​e coloque o resto em uma matriz:

const numeros = ['5','6','7','8','9','10']
const allNumbers = ['Um','Dois','Três','Quatro',...numeros]

//console.log(allNumbers)

//********************************************/
//Com objetos:
const ObjName = {
    userN1:'Léo',
    userN2:'João',
    userN3:'Maria',
    userN4:'José'
}
const ObjSobrenome = {
    userS1:'Madeira',
    userS2:'Lorem',
    userS3:'Ipsum',
    userS4:'Losum' //Mistura de lorem com ipsum
}

const ObjAllName = { ...ObjName, ...ObjSobrenome}

console.log(ObjAllName)