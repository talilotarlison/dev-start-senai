// Complete a função obterPrecoDoBilhete() de forma que ela retorne
// o preço de uma viagem de trem em centavos, conforme a idade do
// qusuário.

// O preço de uma viagem de trem é de R$ 40 (4.000 centavos). No 
// entanto, usuários com menos de 18 anos e usuários com mais de 60 
// anos recebem um desconto de 50%.

// Faça com que a função retorne o valor do bilhete esperado em 
// centavos.

function obterPrecoDoBilhete(idade) {
    if(idade < 18 || idade >=60){
        return 4000 * (50/100)
    }else{
        return 4000
    }
}

// Não modifique as linhas abaixo
console.log(obterPrecoDoBilhete(15)) // 2000
console.log(obterPrecoDoBilhete(30)) // 4000
console.log(obterPrecoDoBilhete(45)) // 4000
console.log(obterPrecoDoBilhete(75)) // 2000