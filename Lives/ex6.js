class Pessoa{
    nome;
    idade;
    debito;
    constructor(nome,idade,debito){
      this.nome = nome;
      this.idade = idade;
      this.debito = debito
    }
    
  podeCompar(){
    let statusCompa;
    if(this.debito){
     statusCompa = `${this.nome} esta com nome sujo, não pode compra!!`;
    }else{
       statusCompa = `${this.nome} pode comprar,esta com nome limpo!!`;
    }
    return statusCompa;
  }  

}
  
class Fisica extends Pessoa{
  cpf;
  peso;
  constructor(nome,idade,debito,cpf,peso){
    super(nome,idade,debito);
    this.cpf = cpf;
    this.peso = peso;
  }
  
  get getCpf(){
    return `A pessoa ${this.nome} tem cpf: ${this.cpf}!!`;
  }
  apresentacao(){
      return `O ${this.nome} é um Pessoa Fisica com idade ${this.idade}!!`;
    }
}

class Juridica extends Pessoa{
  cnpj;
  constructor(nome,idade,debito,cnpj){
    super(nome,idade,debito);
    this.cnpj = cnpj;
  }
  
  get getCnpj(){
    return `A empresa ${this.nome} tem CNPJ: ${this.cnpj}!!`;
  }
  apresentacao(){
      return `A ${this.nome} é um Empresa com idade ${this.idade}!!`;
    }
}


//empresa 
const empresa1 = new Pessoa("Messi",33, false)
console.log(empresa1);
console.log(empresa1.podeCompar());

const joao = new Pessoa("Joao",20, true)
console.log(joao);
console.log(joao.podeCompar());

//fisica
const pedro = new Fisica("Pedro",40,true, "999-999-999-00",80)
console.log(pedro);
console.log(pedro.podeCompar());

console.log(pedro.getCpf);
console.log(pedro.apresentacao());

//juridica
const senai = new Juridica("senai",90,false, "9989-9899-9989-00")
console.log(senai);
console.log(senai.podeCompar());

console.log(senai.getCnpj);
console.log(senai.apresentacao());



