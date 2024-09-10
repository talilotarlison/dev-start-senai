function obterNomeCompletoDoUltimoUsuario(usuarios) {
    let nome = usuarios[usuarios.length -1].nome;
    let sobrenome = usuarios[usuarios.length -1].sobrenome
    return `${nome} ${sobrenome}`
}

// Não modifique as linhas abaixo
let usuarios = [
  {
    nome: "Samuel",
    sobrenome: "Bastos",
    idade: 21,
  },
  {
    nome: "Carla",
    sobrenome: "Nogueira",
    idade: 38,
  }
];

console.log(obterNomeCompletoDoUltimoUsuario(usuarios));