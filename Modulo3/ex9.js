function obterSomaDeNotasAninhadas(estudantes) {
    var somaNotas = 0
    var notas = estudantes.map(estudante=>{
        return estudante.aprendizagemDeProgramacao.nota
    })

    notas.forEach(nota => {
        somaNotas += nota
    });

    return somaNotas
}

// Não modifique as linhas abaixo
let estudantes = [
  {
    nome: "Diana Kelling",
    idade: 24,
    aprendizagemDeProgramacao: {
        anoInicio: 2020,
        nota: 8
    }
  },
  {
    nome: "Marcelo Kioski",
    idade: 31,
    aprendizagemDeProgramacao: {
        anoInicio: 2021,
        nota: 9
    }
  }
];

console.log(obterSomaDeNotasAninhadas(estudantes));