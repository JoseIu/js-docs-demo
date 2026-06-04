const numbers = [1, 2, 3, 4, 5, 6, 7]

const doubleEvenNumbers = numbers
  .filter(number => number % 2 === 0) // [2, 4, 6]
  .map(number => number * 2) // [4, 8, 12]

console.log(doubleEvenNumbers) // [4, 8, 12]
