Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log ('Honra ao mérito!')
    } else if (nota.entre(7, 8.9)) {
        console.log('Aprovado!')
    } else if (nota.entre(5, 6.9)) {
        console.log('Exame!')
    } else if (nota.entre(0, 4.9)) {
        console.log('Reprovado!!')
    } else {
        console.log('Nota inválida!')
    }
}

imprimirResultado(11)