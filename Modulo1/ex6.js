function podeVotar(idade){
    var staus= false;
    if(idade >= 18){
      staus = true
    }
    
    return staus
  }
  
  console.log(podeVotar(20));
  console.log(podeVotar(18));
  console.log(podeVotar(17));