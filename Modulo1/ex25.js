function obterMesagemVotacao(idade) {
    if (idade >= 16) {
        return "Você está autorizado a votar"
    }
      return "Você não está autorizado a votar"
}

// Não modifique as linhas abaixo
console.log(obterMesagemVotacao(20))
console.log(obterMesagemVotacao(10))