function adicionarNota(notas, nota) {
    notas.push(nota)
    return notas
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

function obterSomaDasNotas(notas) {
    return notas.reduce((total, nota) => total + nota, 0)
}

function obterMediaDasNotas(notas) {
    let totalNotas = notas.length
    let somaNotas = notas.reduce((total, nota) => total + nota, 0)
    return somaNotas/totalNotas
}

function obterNotasAumentadasEm2(notas) {
    return notas.map((nota)=>nota+2)
}

// Não modifique as linhas abaixo
adicionarNota([10, 5, 18, 3, 14, 19, 9], 10)
obterTotalDeNotas([18, 4, 9, 20, 8])

// Não modifique as linhas abaixo
obterPrimeiraNota([10, 5, 18, 3, 14, 19, 9])
obterUltimaNota([18, 4, 9, 20, 8])

// Não modifique as linhas abaixo
obterSomaDasNotas([10, 5, 18, 3, 14, 19, 9])
obterMediaDasNotas([18, 4, 9, 20, 8])

// Não modifique as linhas abaixo
obterNotasAumentadasEm2([10, 5, 18, 3, 14, 19, 9])
