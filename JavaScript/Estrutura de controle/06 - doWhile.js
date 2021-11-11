let generateRandomNumber = (min, max) => {
  const value = Math.random() * (max - min) + min
  return Math.floor(value)
}

let loop = -1

do {
// the difference from while to doWhale is the tag's position, but it always executes it first if the condition is already true. DoWhile is not used mt, what Devs use the most is what we'll see now
  loop = generateRandomNumber (-2, 10)
  console.log(loop)
} while (loop != -1)
