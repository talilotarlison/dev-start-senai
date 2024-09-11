function senhaEValida(senha) {
    console.log(senha)
    if(senha.length >= 10){
        return true
    }else{
         return false
    }

}


senhaEValida("Senh4@DoJo4o") ;
senhaEValida("Senh4@DoJ") 


function senhaEValida(senha) {
    var senhaLimpa = senha.trim()
    console.log(senha)
    console.log(senhaLimpa)

    if(senhaLimpa.length >= 10){
        return true
    }else{
         return false
    }

}

senhaEValida("  Senh4@DoJo4o ")
senhaEValida("  Senh4@DoJ ")