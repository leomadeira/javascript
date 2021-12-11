//Antes
function hello() {
    return (`Hello, World`)
}

//********************************************************************************************************/

//ES6 Com função de seta:
helloArrow = () => {
    return `Hello, World! Arrow`
}


//Obs:
// Ele fica mais curto! Se a função tiver apenas uma instrução e a instrução retornar um valor, você pode remover os colchetes e a returnpalavra-chave:
helloArrow2 = () => `Hello, World! Arrow2` //isso funciona apenas se a função tiver apenas uma instrução.

//********************************************************************************************************/
//Função de seta com parâmetros:
helloParametro = (val) => `Hello, ${val}`

//se você tiver apenas um parâmetro, também poderá pular os parênteses:
helloParametro2 = val2 => `Hello, ${val2}`

