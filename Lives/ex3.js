class Atleta {
    nome
    idade
    peso
    altura
    #notas
    constructor(nome,idade,peso,altura,notas){
      this.nome = nome;
      this.idade =idade;
      this.peso = peso;
      this.altura =altura;
      this.#notas = notas;
    }
      
    #calculaCategoria(){
      let categoria;
      
      if(this.idade >=9 && this.idade <= 11 ){// Infantil: 9 a 11 anos
        categoria = "Infantil";
      }else if(this.idade >=12  && this.idade <= 13){// Juvenil: 12 e 13 anos
         categoria = "Juvenil";
      }else if(this.idade >=14  && this.idade <= 15){// Intermediário: 14 e 15 anos
        categoria = "Intermediário";
      }else if(this.idade >=16  && this.idade <= 30){// Adulto: 16 a 30 anos
        categoria = "Adulto";
      }else{// Sem categoria: demais idades
        categoria = "Sem categoria";
      }
      return categoria
    }
    
    #calculaIMC(){
      return this.peso/(this.altura*this.altura)
    }
    
    #calculaMediaValida(){
      let notasOrdenados = this.#notas.sort((a, b) => a - b).slice(1,4)
      
      let todasAsNotas = notasOrdenados.length
      let somaNotas = notasOrdenados.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
      return somaNotas/todasAsNotas
    }
    
    get obtemNomeAtleta(){
      return this.nome
    }
    
    get obtemIdadeAtleta(){
      return this.idade
    }
    
    get obtemPesoAtleta(){
      return this.idade
      
    }
    
    get obtemAlturaAtleta(){
      return this.altura
      
    }
    
    get obtemNotasAtleta(){
      return this.#notas.join(", ")
    }
    
    get obtemCategoria(){
      return this.#calculaCategoria();
    }
    
    get obtemIMC(){
      return this.#calculaIMC();
    }
    
    get obtemMediaValida(){
      return this.#calculaMediaValida();
    }
      
      
      
    }
    
    
    // Declara o atleta
    const cesar = new Atleta("Cesar Abascal",
        30, 80, 1.70,
        [10, 9.34, 8.42, 10, 7.88]);
      
    console.log("Nome: ",cesar.obtemNomeAtleta)
    console.log("Idade: ",cesar.obtemIdadeAtleta)
    console.log("Peso: ",cesar.obtemPesoAtleta)
    console.log("Altura: ",cesar.obtemAlturaAtleta)
    console.log("Notas: ",cesar.obtemNotasAtleta)
    console.log("Categoria: ",cesar.obtemCategoria)
    console.log("IMC: ",cesar.obtemIMC)
    console.log("Média válida: ",cesar.obtemMediaValida)
    
    
    
    