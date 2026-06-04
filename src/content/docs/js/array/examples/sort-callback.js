const numeros = [33, 65, 11,88, 45, 4]
console.log(numeros.sort((a, b) => {
  console.log(a, b)
}))
//Siempre coje pares de números para compararlos sindo a el segundo valor y b el primero

//Primera vuelta => 65 33
//Segunda vuelta => 11 65
//Tercera vuelta => 88 11
//Cuarta vuelta => 45 88
//Quinta vuelta => 4 45
