const numbers = [1, 2, 3]

const sum = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber
}, 0) // <- el 0 es el valor inicial

console.log(sum) // 6
