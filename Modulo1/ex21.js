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