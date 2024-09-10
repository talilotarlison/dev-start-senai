function obterNomeCompleto(usuario) {
    return `${usuario.nome} ${usuario.sobrenome}`
}

// Não modifique as linhas abaixo
let usuario1 = {
    nome: "Helena",
    sobrenome: "Mordaz",
    idade: 20
};

let usuario2 = {
    nome: "Bruno",
    sobrenome: "Antunes",
    idade: 31
};
console.log(obterNomeCompleto(usuario1)); // "Helena Mordaz"
console.log(obterNomeCompleto(usuario2)); // "Bruno Antunes"

