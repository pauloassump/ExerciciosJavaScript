const imprimirResultado = function(nota) {
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra')
            break;
        
        case 8: case 7: //Pode escrever as setenças um do lado do outro
            console.log('Aprovado')
            break;
        case 6: case 5:
            console.log('Exame')
            break;
        case 4: case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break;
        default:
            console.log('Nota Inválida!')
    }
}

imprimirResultado(7)
imprimirResultado(9)
imprimirResultado(4)