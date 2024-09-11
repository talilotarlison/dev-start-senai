function obterDescritivoDaNota(nota, notaMaisAlta) {
return(

    `Você tem ${nota} como nota. Ou seja, ${notaMaisAlta-nota} pontos a menos do que a nota mais alta. Se você tivesse estudado mais, poderia ter conseguido ${nota + 3}.`
)
}

// Não modifique as linhas abaixo
console.log(obterDescritivoDaNota(10, 18)) // Você tem 10 como nota. Ou seja, 8 pontos a menos do que a nota mais alta. Se você tivesse estudado mais, poderia ter conseguido 13.
console.log(obterDescritivoDaNota(15, 20)) // Você tem 15 como nota. Ou seja, 5 pontos a menos do que a nota mais alta. Se você tivesse estudado mais, poderia ter conseguido 18.



function inverterBooleano(valor) {
    return !valor
    }
    
    // Não modifique as linhas abaixo
    console.log(inverterBooleano(true)) // false
    console.log(inverterBooleano(false)) // true
    console.log(inverterBooleano(15 > 10)) // false


    function mensagemDeVotacao(idade) {
        if(idade >=16 && idade <=30){
            return "Você pode votar"
        }else{
            return "Você não pode votar"
        }
    }
    
    // Não modifique as linhas abaixo
    console.log(mensagemDeVotacao(15)) // "Você não pode votar"
    console.log(mensagemDeVotacao(20)) // "Você pode votar"
    console.log(mensagemDeVotacao(35)) // "Você não pode votar"


    function estaPronto(temperatura) {
        if(temperatura>=100 && temperatura <= 150 ){
            return true
        }else{
            return false
        }
            
    }
    
    // Não modifique as linhas abaixo
    console.log(estaPronto(90)) // false
    console.log(estaPronto(100)) // true
    console.log(estaPronto(160)) // false