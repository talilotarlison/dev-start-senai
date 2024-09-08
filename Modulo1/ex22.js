function obterLetraDaNota(nota) {
    if (nota >= 15) {
        return "A"
    } else if (nota >= 10) {
        return "B"
    } else {
         return "F"
    }
}

// Não modifique as linhas abaixo
console.log(obterLetraDaNota(18))
console.log(obterLetraDaNota(15))
console.log(obterLetraDaNota(13))
console.log(obterLetraDaNota(4))


function obterLetraDaNota(nota) {
    if (nota < 10) {
     return "F"
    } else if (nota < 15) {
   return "B"
    } else {
   return "A"
    }
}

// Não modifique as linhas abaixo
console.log(obterLetraDaNota(18))
console.log(obterLetraDaNota(15))
console.log(obterLetraDaNota(13))
console.log(obterLetraDaNota(4))