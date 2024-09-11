function notasTriplicadas(notas) {
    return notas.map(nota => nota * 3)
}

// Não modifique as linhas abaixo
console.log(notasTriplicadas([10, 20])) // [30, 60]
console.log(notasTriplicadas([5, 12, 20, 10])) // [15, 36, 60, 30]


function dobreNumeros(numeros) {
    return numeros.map(numero => numero * 2)
}

// Não modifique as linhas abaixo
console.log(dobreNumeros([10, 20])) // [20, 40]
console.log(dobreNumeros([5, 12, 20, 10])) // [10, 24, 40, 20]


function aumentarTemperaturasEm5(temperaturas) {
    return temperaturas.map(temperatura => temperatura + 5)
}

// Não modifique as linhas abaixo
console.log(aumentarTemperaturasEm5([-5, 12, -15, 18, 13])) // [0, 17, -10, 23, 18]
console.log(aumentarTemperaturasEm5([5, 20, 10])) // [10, 25, 15]