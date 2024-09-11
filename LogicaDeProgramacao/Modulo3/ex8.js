function obterSomaDeTodasAsNotas(notas) {
    let soma = 0
    let soNotas = notas.map((nota) => {
        return nota.nota
    })

    soNotas.forEach(nota => {
        soma += nota
    });

    return soma
}

// Não modifique as linhas abaixo
let notas = [
    {
        nome: "Sandra Assis",
        nota: 8
    },
    {
        nome: "Érica Blanck",
        nota: 3
    }
];

console.log(obterSomaDeTodasAsNotas(notas));