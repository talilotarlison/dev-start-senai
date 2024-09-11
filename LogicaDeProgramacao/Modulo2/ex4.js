function somaDeTemperaturasNaoCongelantes(temperaturas) {
    let somaTemperatura = 0;

    temperaturas.forEach(temperatura => {
        if(temperatura>0){
            somaTemperatura += temperatura
        }
    });
    return somaTemperatura;
}


// Não modifique as linhas abaixo
somaDeTemperaturasNaoCongelantes([-13, 5, -8, -3, 0, 3, 5]) // deveria retornar 13
somaDeTemperaturasNaoCongelantes([12, -4, 9, -20, 8]) // deveria retornar 29