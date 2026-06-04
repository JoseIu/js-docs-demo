const numbers = [13, 27, 44, -10, 81]
// encuentra el primer número negativo
const firstNegativeNumber = numbers.find(number => number < 0)

console.log(firstNegativeNumber) // -> -10
