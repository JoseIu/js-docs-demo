const numbers = [1, 2, 3, 4, 5, 6, 7]

const doubleEvenNumbers = numbers.reduce((accumulator, currentNumber) => {
  const isEven = currentNumber % 2 === 0
  const doubled = currentNumber * 2
  const isGreaterThanFive = doubled > 5

  // si es par y mayor que 5, lo añadimos al array
  if (isEven && isGreaterThanFive) {
    // para ello devolvemos un nuevo array con el valor actual
    return accumulator.concat(doubled)
  } else {
    // si no, devolvemos lo que ya teníamos
    return accumulator
  }
}, []) // <- el array vacío es el valor inicial

console.log(doubleEvenNumbers) // [8, 12]
