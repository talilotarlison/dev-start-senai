const entradaUsuario = "DEVSTART";

function juntarArrayLetrasEmPalavra(letras) {
  return letras.join("");
}

function inverteArrayLetras(letras) {
  return letras.reverse();
}

function separaPalavraEmArrayDeLetras(palavra) {
  return palavra.split("");
}

function exibePalavraInvertida(palavra) {
  console.log(`Palavra invertida: ${palavra}`);
}

function main(palavra) {
  const letras = separaPalavraEmArrayDeLetras(palavra);
  const letrasInvertidas = inverteArrayLetras(letras);
  const palavraInvertida = juntarArrayLetrasEmPalavra(letrasInvertidas);
  exibePalavraInvertida(palavraInvertida);
}

main(entradaUsuario);
