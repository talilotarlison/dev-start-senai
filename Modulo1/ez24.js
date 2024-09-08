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