// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const numeros = [1, 25, 3, 42];

const somaTotal = numeros.reduce(
  (accumulator, currentValue) => {
   return accumulator + currentValue
  });

console.log(somaTotal);


