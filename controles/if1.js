function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com:' + nota)
    } else {
        console.log('Reprovado!')
    }
}

soBoaNoticia(8.1)
soBoaNoticia(5.5)

function seForVerdade(valor) {
    if(valor) {
        console.log('É verdade!')
    }
}

seForVerdade(true)
seForVerdade(null)