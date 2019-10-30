/* const notas = [5.6, 8.5, 9.5, 7, 6.9]

for(let i in notas) {
    console.log(i, notas[i])
} Exemplo 1*/

const pessoas = {
    nome: 'Paulo',
    idade: 28,
    peso: 100
}

for(let atributos in pessoas) {
    console.log(`${atributos} = ${pessoas[atributos]}`)
}