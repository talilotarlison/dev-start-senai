
function obterSomaDasNotas(estudante) {
    return estudante.notas.reduce((total,nota)=>{return total += nota},0)
 
}

// Não modifique as linhas abaixo
let estudante = {
    nome: "Evandro Carneiro",
    idade: 16,
    notas: [3, 5, 5, 4, 8]
};

console.log(obterSomaDasNotas(estudante));