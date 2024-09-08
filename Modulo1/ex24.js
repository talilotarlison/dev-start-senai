function eCodigoPromocionalValido(codigo) {
    console.log(codigo)
    if(codigo>10){
        return false
    }else if(codigo<5){
 return false
    }else{
        return true
    }
}

console.log(eCodigoPromocionalValido(5))

function podeVotar(idade) {
    if (idade >= 16) {
        return true
    }
     return false
}

// Não modifique as linhas abaixo
console.log(podeVotar(25))
console.log(podeVotar(13))