function obterMensagemDeVotacao(usuario) {
    let status;
    if(usuario.idade >= 16){
        status ="Você pode votar";
    }else{
        status = "Você não pode votar";
    }
    return status;
}

// Não modifique as linhas abaixo
let usuario1 = {
    nome: "Samanta",
    sobrenome: "Duarte",
    idade: 15
};

let usuario2 = {
    nome: "Carla",
    sobrenome: "Fortes",
    idade: 31
};

console.log(obterMensagemDeVotacao(usuario1)); // "Você não pode votar"
console.log(obterMensagemDeVotacao(usuario2)); // "Você pode votar"