function dobro(x) {
    return x * 2
}

function triplo(x) {
    return x * 3
}

function executar(operacao, x) {
    if (operacao === "dobro") {
        return dobro(x)
    }

    if (operacao === "triplo") {
        return triplo(x)
    }
}

// Não modifique as linhas abaixo
console.log(executar("dobro", 5)) // deveria retornar 10
console.log(executar("triplo", 30)) // deveria retornar 90