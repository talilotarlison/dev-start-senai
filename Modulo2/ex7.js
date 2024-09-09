let notas = [10, 5, 15, 20]
// calcule o soma dessas notas com reduce
let soma = notas.reduce((total,nota)=>{
return total + nota
},0)

console.log(soma)




function somaNumeros(numeros) {
    return numeros.reduce((total,numero)=>total+numero,0)

}

// Não modifique as linhas abaixo:
console.log(somaNumeros([10, 20, 30])) // 60
console.log(somaNumeros([2, 4, 2, 10])) // 18



function multipliqueNumeros(numeros) {
  return numeros.reduce((total,numero)=>{
        return total * numero
    },1)

}

// Não modifique as linhas abaixo:
console.log(multipliqueNumeros([10, 20, 30])) // 6000
console.log(multipliqueNumeros([2, 4, 2, 10])) // 160