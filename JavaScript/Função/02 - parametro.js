
// a² = b² + c²
function calcPitagoras(b, c) {
  // Parametro é o valor de 'B' e 'C'
  let a = Math.pow(b, 2) + Math.pow(c, 2)
  a = a ** (1 / 2)
  console.log(a)
}
calcPitagoras(21, 28)

// Eu poderia resolver desta outra forma aqui tbm
const calcPitagoras2 = (b, c, a) => {
  a = b ** 2 + c ** 2
  a = a ** 0.5
  console.log(a)
}

calcPitagoras2(3, 4)
