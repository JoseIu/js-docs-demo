const persona = {
  name: 'Dani',
  walk: function () {
    console.log('Estoy caminando')
  }
}

persona.walk() // -> Estoy caminando

let method = 'walk'
persona[method]() // -> Estoy caminando
