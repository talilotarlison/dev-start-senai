function corrigirPrimeiroNumero(numeros) {
    numeros[0] = 2
    let corrigeMatriz = numeros
    console.log(corrigeMatriz)
    return corrigeMatriz

}

// Não modifique as linhas abaixo
console.log(corrigirPrimeiroNumero([1, 4, 6, 8]))
console.log(corrigirPrimeiroNumero([1, 10, 13, 19]))


function corrigirSegundoNumero(numeros) {
    numeros[1] = 5
  let corrigeMatriz = numeros
  console.log(corrigeMatriz)
  return corrigeMatriz
}

// Não modifique as linhas abaixo
console.log(corrigirSegundoNumero([1, 4, 6, 8]))
console.log(corrigirSegundoNumero([1, 10, 13, 19]))



function incrementarPrimeiraTemperatura(temperaturas) {
    temperaturas[0]++
     let novaTemperatura = temperaturas
      return novaTemperatura
    }
    
    // Não modifique as linhas abaixo
    console.log(incrementarPrimeiraTemperatura([3, 5, 4, 7]))
    console.log(incrementarPrimeiraTemperatura([-5, 12, 15, 18, 13]))