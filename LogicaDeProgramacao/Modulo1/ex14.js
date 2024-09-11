function soma(a, b) {
    return a + b
}

function multiplica(a, b) {
    return a * b
}

function subtrai(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

function executa(operacao, x, y) {
    console.log(operacao)
    console.log(x, y)
    // Escreva seu código abaixo
    if(operacao === "soma"){
        return soma(x,y)
    }
    if(operacao === "multiplica"){
        return multiplica(x,y)
    }
    
    if(operacao == "subtrai"){
        return subtrai(x,y)
    }
    
    if(operacao==="divide"){
        return divide(x,y)
    }
    
    
}

// Não modifique a linha abaixo
console.log(executa("soma", 10, 20))