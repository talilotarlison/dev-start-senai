function obtenhaMensagemVotacao(idade) {
    if (idade >= 16) {
        return "Você tem permissão para votar"
    } else {
 return "Você não tem permissão para votar"
    }
}

// Não modifique as linhas abaixo
console.log(obtenhaMensagemVotacao(20))
console.log(obtenhaMensagemVotacao(10))