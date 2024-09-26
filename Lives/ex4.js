class Gato{
    nome;
    peso;
    cor;
    constructor(nome,peso,cor){
      this.nome = nome;
      this.peso = peso;
      this.cor = cor;
    }
    
    miar(){
     return `O ${this.nome} esta miando!!` ;
    }
    
    apresentacao(){
      return `O ${this.nome} é um gato da cor ${this.cor}!!`;
    }
  }
  
  
  const gato1 = new Gato("Messi", 2, "preto")
  const gato2 = new Gato("Chico", 2, "laranja")
  console.log(gato1);
  console.log(gato2.nome);
  console.log(gato2.miar());