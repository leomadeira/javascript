let gerarNumeroAleatorio = (min, max) => {
  const valor = Math.random() * (max - min) + min
  return Math.ceil(valor)
}

let laco = 0

while (laco != -1) {
  laco = gerarNumeroAleatorio(-2, 10)
  console.log(laco)
}
