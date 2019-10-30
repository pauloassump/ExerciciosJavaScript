let valor //não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)

const produto = {
    preco: 6.00
}
console.log(produto.preco)
console.log(produto)


produto.preco = null // sem preço
console.log(!!produto.preco)
