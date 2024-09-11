let notas = [10, 5, 13]
let primeiraNota = notas[0]
console.log(primeiraNota)


function obterPrimeiraNota(notas) {
    return notas[0]
  }
  
  // Não modifique as linhas abaixo
  console.log(obterPrimeiraNota([13, 10, 18, 19, 20]))
  console.log(obterPrimeiraNota([3, 0, 10, 17]))

  function localizacaoDaLoja(coordenadas) {
    return `A loja está localizada em ${coordenadas[0]}, ${coordenadas[1]}`
    }
    
    // Não modifique as linhas abaixo
    console.log(localizacaoDaLoja([5.123, 2.374]))
    console.log(localizacaoDaLoja([-2.207, 9.319]))


    function localizacaoDaLoja(loja, coordenadas) {
        return `${loja}localiza-se na ${coordenadas[0]}, ${coordenadas[1]}`
       }
       
       // Não modifique as linhas abaixo 
       console.log(localizacaoDaLoja("O supermercado", [5.123, 2.374]))
       console.log(localizacaoDaLoja("A academia", [-2.207, 9.319]))