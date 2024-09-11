function somaNotasIguaisOuAcimaDe6(notas) {
    let somaNotas = 0;
    
    notas.forEach(nota => {
        if(nota>=6){
         somaNotas += nota   
        }
    });
    return somaNotas
    }
    
    // Não modifique as linhas abaixo
    somaNotasIguaisOuAcimaDe6([10, 5, 18, 3, 14, 19, 9]) // deveria retornar 70
    somaNotasIguaisOuAcimaDe6([18, 4, 9, 20, 8]) // deveria retornar 55