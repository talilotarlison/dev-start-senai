class Cliente{
    nome;
    identificacao;
    constructor(nome,identificacao){
      this.nome = nome;
      this.identificacao = identificacao;
    }
    percentualDeDesconto(){
      throw new Error("Metodo percentualDeDesconto() é obrigatorio!")
    }
    
  }
  //herança
  class PessoaFisica extends Cliente{
    cpf; 
    constructor(nome,identificacao,cpf){
      super(nome,identificacao)
      this.cpf = cpf;
    }
    //polimofismo
    percentualDeDesconto(){
      return (`O cliente ${this.nome} de  CPF ${this.cpf} e identificacao ${this.identificacao} recebera 10% de desconto!`)
    }
  }
  
  // herança
  class PessoaJuridica extends Cliente{
    cnpj;
    nomeFantasia;
    constructor(nome,identificacao,cnpj,nomeFantasia){
      super(nome,identificacao)
      this.cnpj = cnpj;
      this.nomeFantasia =nomeFantasia;
    }
    percentualDeDesconto(){
      //polimofismo
      return (`A empresa ${this.nome} de  CNPJ ${this.cnpj} e identificacao ${this.identificacao} e nome fantasma ${this.nomeFantasia} recebera 30% de desconto!`)
    }
  }
  
  
  function mostrarDesconto(pessoa){
    return console.log(pessoa.percentualDeDesconto());
  }
  
  //cliente Pedro
  const pedro = new Cliente("Pedro", "05615")
  console.log(pedro);
  //console.log(pedro.percentualDeDesconto());
  
  // Pessoa fisica joao
  const joao = new PessoaFisica("João", "18484", "999-999-999-00")
  console.log(joao);
  console.log(joao.percentualDeDesconto());
  
  // pessoa juridica Senai
  const senai = new PessoaJuridica("SENAI", "4587", "999-9999-9999-99","Centro Industiral")
  console.log(senai);
  console.log(senai.percentualDeDesconto());
  
  
  
  mostrarDesconto(joao);
  mostrarDesconto(senai);
  