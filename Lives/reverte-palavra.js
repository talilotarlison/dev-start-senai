var entradaUsuario = "DEVSATART";

function invertePalavra(palavra){
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
  let arrayLetras = palavra.split("");
  let arrayReverso = arrayLetras.reverse();
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  let palavraInvertida =  arrayReverso.join("");
  console.log(palavraInvertida)
}

invertePalavra(entradaUsuario);
