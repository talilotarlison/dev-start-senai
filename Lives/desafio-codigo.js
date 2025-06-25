var entradaUsuario = "DEVSATART";

function juntarArrayLetrasEmPalavra(palavras){
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  let palavraInvertida =  palavras.join("");
  return palavraInvertida;
}

function inverteArrayLetras(palavra){
  let arrayInvertido = palavra.reverse();
  return arrayInvertido;
}

function separaPalavraEmArrayDeLetras(palavra){
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
  let palavrasArray = palavra.split("");
  return palavrasArray;
}

function exibePalavraInvertida(palavra){
  let arrayLetras = separaPalavraEmArrayDeLetras(palavra);
  let arrayInvertido = inverteArrayLetras(arrayLetras);
  let palavraInvertida = juntarArrayLetrasEmPalavra(arrayInvertido);
  console.log(palavraInvertida);
}

exibePalavraInvertida(entradaUsuario);
