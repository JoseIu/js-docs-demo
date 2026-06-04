const numeros = [33, 65, 11,88, 45, 4]
console.log(numeros.sort((a, b) => a - b)) // -> [4, 11, 33, 45, 65, 88]

//Primera vuelta => 65 - 33 => 65 - 33 =  32 => 32 es un numero positivo, entonces 65 va despues de 33
//Segunda vuelta => 11 - 65 => 11 - 65 = -54 => -54 es un numero negativo, entonces 11 va antes de 65


//Así con todos hasta llegar al ultimo numero, esto lo va a realizar hasta tenerlo ordenadro y el resultado es un array ordenado de menor a mayor
