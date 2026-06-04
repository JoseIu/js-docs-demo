const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const tieneNumeroMayorA5 = numbers.some(number => {
  console.log(`Estoy iterando sobre el número ${number}`) // -> Imprime hasta el número 6
  return number > 5
})

console.log(tieneNumeroMayorA5) // -> true
