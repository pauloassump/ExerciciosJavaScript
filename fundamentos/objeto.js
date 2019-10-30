const prod1 = {}
prod1.nome = "Camisa"
prod1.preco = 100.00
prod1['Desconto'] = 20.00

console.log(prod1)

const prod2 = {

    nome: "Bermuda",
    preco: 80.00,
    ["Desconto"]: 5.00
}

console.log(prod2)
