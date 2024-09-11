function adicionarNota(notas, nota) {
    notas.push(nota)
    return notas
}

function obterNumeroDeTestes(notas) {
    return  notas.length
}

function obterPrimeiraNota(notas) {
    return notas[0]
}

function obterUltimaNota(notas) {
    return notas[notas.length - 1]
}

function aProvaEhMuitoFacil(notas) {
    return notas.includes(20)
}

function aNotaExiste(notas, nota) {
    return notas.includes(nota)
}

function exportarCSV(notas) {
    return notas.join(", ")
}

adicionarNota([4, 6, 3, 8, 9, 10, 5, 7, 2], 7)
obterNumeroDeTestes([4, 6, 3, 8, 9, 10, 5, 7, 2])
obterPrimeiraNota([4, 6, 3, 8, 9, 10, 5, 7, 2])
obterUltimaNota([4, 6, 3, 8, 9, 10, 5, 7, 2])
aProvaEhMuitoFacil([4, 6, 3, 8, 9, 10, 5, 7, 2])
aNotaExiste([4, 6, 3, 8, 9, 10, 5, 7, 2],6)
exportarCSV([4, 6, 3, 8, 9, 10, 5, 7, 2])

