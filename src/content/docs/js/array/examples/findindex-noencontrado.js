const numbers = [13, 27, 44, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex) // -> -1
