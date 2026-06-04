const entries = Object.entries(spiderman)

entries.forEach(entry => {
  const property = entry[0]
  const value = entry[1]

  console.log(`${property}: ${value}`)
})
