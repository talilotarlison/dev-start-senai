// Complete a função obterPlanoDoUsuario() de forma que ela retorne:

// "profissional", quando o usuário pagou e completou pelo menos 10 
// desafios (inclusive).
// "gratuito" em todos os outros casos.
// A função recebe dois parâmetros:

// pagou, que terá valor true caso o usuário tenha pago, e false caso 
// contrário.
// desafios completos, que indica a quantidade de desafios que o 
// usuário completou.

function obterPlanoDoUsuario(pagou, desafiosCompletos) {
    if(pagou === true && desafiosCompletos >=10){
        return "profissional"
    }else{
        return "gratuito"
    }
}

// Não modifique as linhas abaixo
console.log(obterPlanoDoUsuario(true, 5)) // "gratuito"
console.log(obterPlanoDoUsuario(true, 20)) // "profissional"
console.log(obterPlanoDoUsuario(false, 5)) // "gratuito"
console.log(obterPlanoDoUsuario(false, 20)) // "gratuito"