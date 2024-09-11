function calcularTotal(numeros) {
    let soma = 0
    numeros.forEach(function (numero) {
        soma += numero
    })
     return soma
}

// Não modifique as linhas abaixo
console.log(calcularTotal([10, 20, 10])) // deveria ser 40
console.log(calcularTotal([5, 7, 3, 9])) // deveria ser 24
console.log(calcularTotal([])) // deveria ser 0