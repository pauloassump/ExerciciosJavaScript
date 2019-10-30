const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.781
const avaliacao2 = 6.781

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log (media.toFixed(2)) // casas decimais
console.log(media.toString(2)) //converte pra binário
console.log(typeof media)



