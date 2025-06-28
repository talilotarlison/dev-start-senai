const numeros = [1, 25, 3, 42];
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// 0 + 1 + 2 + 3 + 4
const valorInicial = 0;
const sumWithInitial = numeros.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  valorInicial,
);

console.log(sumWithInitial);
