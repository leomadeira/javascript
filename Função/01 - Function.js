// Function anonimo literal
{
    function nomeDaFuncao() {  /***/ } // anonimo pq dentro de () não tem nada
}
// function anonimo literal dentro de uma variavel
{
    let nomeDaFuncao = function () { /***/ }
}

// tbm podemos armazenar em um objeto

const Obj = {}
Obj.falar = function () { return 'Olá, mundo!' }
console.log(Obj.falar())
// passar função como parametro
function primeiraFunc(segundaFunc) {
    segundaFunc()
}
primeiraFunc(function () { console.log('Executando...') } )
/*************************************************** */
