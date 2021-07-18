function tratarErro(erro) {
  throw {
    name: erro.name,
    msg: erro.message,
    date: new Date()
  }
}

function imprimirNome(obj) {
  try {
    // try: caso o programa nao tenha erro, o programa é executado normalmente
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    // catch: caso o programa de erro, a função tratarErro é executada
    tratarErro(e)
  } finally {
    // finally: mesmo o programa dando erro ou nao o comendo é executado.
    console.log('Final do Programa!')
  }
}

const obj = { n: 'Leonardo' } // Escreva name no lugar de N para o programa executar corretamente.

imprimirNome(obj)
