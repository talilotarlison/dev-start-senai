class Animal{
    nome;
    peso;
    cor;
    constructor(nome,peso,cor){
      this.nome = nome;
      this.peso = peso;
      this.cor = cor;
    }
  respirar(){
    return `${this.nome} esta respirando!!`;
  }  

}
  
class Gato extends Animal{
  pelo;
  constructor(nome,peso,cor,pelo){
    super(nome,peso,cor);
    this.pelo = pelo;
  }
  miar(){
    return `O ${this.nome} esta miando!!`;
  }
  pular(){
    return `O ${this.nome} esta pulando!!`;
  }
  apresentacao(){
      return `O ${this.nome} é um gato da cor ${this.cor}!!`;
    }
}

class Peixe extends Animal{
  escama;
  constructor(nome,peso,cor,escama){
    super(nome,peso,cor);
    this.escama = escama;
  }
  nadar(){
    return `O ${this.nome} esta nadando!!`;
  }
  pular(){
    return `O ${this.nome} esta pulando!!`;
  }
}

class Passaro extends Animal{
  pena;
  constructor(nome,peso,cor,pena){
    super(nome,peso,cor);
    this.pena = pena;
  }
  voar(){
    return `O ${this.nome} esta voando!!` ;
  }
  planar(){
    return `O ${this.nome} esta planando!!` ;
  }
}
  
  
const animal1 = new Animal("Messi", 2, "preto")
console.log(animal1);

const gato1 = new Gato("Messi", 2, "preto","curto")
const gato2 = new Gato("Chico", 2, "laranja","longo")
console.log(gato1.pular());
console.log(gato2);

const peixe2 = new Peixe("Peixe Boi", 1, "laranja", "aspero")
console.log(peixe2);
console.log(peixe2.nome);
console.log(peixe2.nadar());


const passaro2 = new Passaro("Pica-Pau", 1, "laranja-preto", "pena longas")
console.log(passaro2);
console.log(passaro2.nome);
console.log(passaro2.voar());


