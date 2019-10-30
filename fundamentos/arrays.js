const valores = [3.6, 5.6, 9.8, 7.5]
console.log(valores[0], valores[3])

console.log(valores[4] = 20)
console.log(valores)
console.log(valores.length)

valores.push('teste', null, false, 0)
console.log(valores)

console.log(valores.pop())

delete valores[0]
console.log(valores)

console.log(typeof valores)