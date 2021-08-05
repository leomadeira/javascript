function roda(min = 0, max = 100) {
  let x = Math.random() * (max - min) + min
  return Math.floor(x)
}
console.log(roda())
