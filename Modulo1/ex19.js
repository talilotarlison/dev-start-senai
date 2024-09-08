function obtenhaMensagemVotacao(idade) {
    if (idade >= 16) {
        return "Você tem permissão para votar"
    }else{
       return "Você não tem permissão para votar" 
    }
}

// Não modifique as linhas abaixo
console.log(obtenhaMensagemVotacao(20))
console.log(obtenhaMensagemVotacao(10))


function podeVotar(idade) {
    if (idade >= 16) {
        return true
    }else{
       return false 
    }
}

// Não modifique as linhas abaixo
console.log(podeVotar(25))
console.log(podeVotar(13))