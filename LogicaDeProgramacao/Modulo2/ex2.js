function obterSomaDeTodasAsNotas(notas) {
    let soma = 0;
    notas.forEach(nota => {
        soma += nota;
    });

    return soma;
}

function obterMediaDeTodasAsNotas(notas) {
    var totalNotas = notas.length
    let somaNotas = 0;
    notas.forEach(function (nota){
        somaNotas += nota
    })
    return somaNotas/totalNotas
}


// Não modifique as linhas abaixo
console.log(obterSomaDeTodasAsNotas([10, 20, 10])) 
console.log(obterSomaDeTodasAsNotas([5, 7, 3, 9])) 
console.log(obterSomaDeTodasAsNotas([])) 

console.log(obterMediaDeTodasAsNotas([10, 20, 10])) 
console.log(obterMediaDeTodasAsNotas([5, 7, 3, 9])) 
console.log(obterMediaDeTodasAsNotas([])) 