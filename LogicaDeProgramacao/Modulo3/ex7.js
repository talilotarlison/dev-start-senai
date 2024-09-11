function obterSomaDeTodasAsNotas(notas) {
    return notas.map((nota) => {
        return {
            nota: nota.nota
        }
    })

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