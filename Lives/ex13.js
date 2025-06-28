const numeros = [1, 25, 3, 42];

let inicial = 100;
const somaTotal = numeros.reduce(
  (accumulator, currentValue) => {
   return accumulator + currentValue
  },inicial);

console.log(somaTotal);
