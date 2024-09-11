function quantosItens(itens) {
 return itens.length 

}

// Não modifique as linhas abaixo
console.log(quantosItens([-5, 12, 15]))
console.log(quantosItens([13, 10]))
console.log(quantosItens([]))



function obterMensagem(itens) {
    return `Você tem ${ itens.length } itens`
}

// Não modifique as linhas abaixo
console.log(obterMensagem([-5, 12, 15])) // "Você tem 3 itens"
console.log(obterMensagem([13, 10])) // "Você tem 2 itens"
console.log(obterMensagem([])) // "Você tem 0 itens"


function obterMensagemDaUltimaTemperatura(temperaturas) {
    return `A última temperatura está na posição ${ temperaturas.length -1 }`
   }
   
   // Não modifique as linhas abaixo
   console.log(obterMensagemDaUltimaTemperatura([-5, 12, 15])) // "A última temperatura está na posição 2"
   console.log(obterMensagemDaUltimaTemperatura([13, 10])) // "A última temperatura está na posição 1"


   function obterUltimaNota(notas) {
    return notas[notas.length -1]
   }
   
   // Não modifique as linhas abaixo
   console.log(obterUltimaNota([12, 15, 18])) // 18
   console.log(obterUltimaNota([10, 20])) // 20
   console.log(obterUltimaNota([8, 13, 20, 3, 14, 5])) // 5