let gerarNumeroAleatorio = (min, max) => {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let laco = -1

do {
  // a diferança do while para o doWhale, é o posição da tag, mas o do executa sempre mesmo primeiro mesmo se a condição ja for verdadeira. DoWhile nao é mt utilizado, o que os Devs mais usam é o for que vamos ver agora
  laco = gerarNumeroAleatorio(-2, 10)
  console.log(laco)
} while (laco != -1)
