function adicionarNota(notas, nota) {
    notas.push(nota)
    var novasNotas = notas
    return novasNotas
}

function obterTotalDeNotas(notas) {
    return notas.length
}

function obterPrimeiraNota(notas) {
    return notas[0]
}


function obterUltimaNota(notas) {
    return notas[notas.length - 1]
}


adicionarNota([4, 6, 3, 8, 9, 10, 5, 7, 2], 7)
obterTotalDeNotas([4, 6, 3, 8, 9, 10, 5, 7, 2])
obterPrimeiraNota([4, 6, 3, 8, 9, 10, 5, 7, 2])
obterUltimaNota([4, 6, 3, 8, 9, 10, 5, 7, 2])