function obterNomesCompletos(usuarios) {
    return usuarios.map(user=>{
        return `${user.nome} ${user.sobrenome}`
    })
}

// Não modifique as linhas abaixo
let usuarios = [
  {
    nome: "Bárbara",
    sobrenome: "Silva",
    idade: 21,
  },
  {
    nome: "Carlos",
    sobrenome: "Bonaparte",
    idade: 38,
  }
];

console.log(obterNomesCompletos(usuarios));