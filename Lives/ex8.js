function notaAluno(nota){
    let statusNota = null;
    if(nota>=8){
        statusNota = "Notas A"
    }else if(nota>=5){
         statusNota = "Nota B"
    }else{
         statusNota = "Nota c"
    }
    return statusNota;
}

console.log(notaAluno())