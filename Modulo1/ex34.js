function obterNumeroTotalDeNotas(notas) {
    return notas.length 
}

function obterPrimeiraNota(notas) {
    return notas[0]
}

function obterUltimaNota(notas) {
    return notas[notas.length -1]
}

obterNumeroTotalDeNotas([4,6,3,8,9,10,5,7,2])
obterPrimeiraNota([4,6,3,8,9,10,5,7,2])
obterUltimaNota([4,6,3,8,9,10,5,7,2])


function adicionarNovaNota(notas) {
    notas.push(18)
  return notas
  }
  
  // Não modifique as linhas abaixo
  console.log(adicionarNovaNota([15, 13, 17])) // [15, 13, 17, 18]
  console.log(adicionarNovaNota([10, 7])) // [10, 7, 18]

  function adicionarNovaTemperatura(temperaturas) {
    temperaturas.push(-6)
  return temperaturas
}

// Não modifique as linhas abaixo
console.log(adicionarNovaTemperatura([-5, 12, 15, 18, 13])) // [-5, 12, 15, 18, 13, -6]
console.log(adicionarNovaTemperatura([13, -5, 0])) // [13, -5, 0, -6]