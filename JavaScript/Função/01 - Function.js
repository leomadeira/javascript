// Function anonimo literal
{
  function nomeDaFuncao() {
    /***/
  } // anonimo pq dentro de () não tem nada
}
// function anonimo literal dentro de uma variavel
{
  let nomeDaFuncao = function () {
    /***/
  } // esse é um jeito bacana, nao uso muito
}

// tbm podemos armazenar em um objeto

const Obj = {}
Obj.falar = function () {
  return 'Olá, mundo!'
}
console.log(Obj.falar())
// passar função como parametro
function primeiraFunc(segundaFunc) {
  segundaFunc()
}
primeiraFunc(function () {
  console.log('Executando...')
})
/****************************************************/

let nomeDaVariavel = (x, y) => x + y // essa é a forma que acho mais interessante para criar uma função. Lembrando que criando desssa forma, não precisamos colocar Return e nem chaves {}
