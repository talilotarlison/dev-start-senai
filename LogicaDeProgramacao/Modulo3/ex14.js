// Definição da classe
class Receita {
    // Insira o método construtor aqui
    constructor(){
      console.log("Nova receita criada")  
    }
    
}

// Testando o construtor
let minhaReceita = new Receita();




// Definindo a classe
class Usuario {
    constructor(nome, sobrenome) {
        console.log("Criando uma nova instância da classe Usuario");
        console.log(nome);
        console.log(sobrenome);
    }
}

// Usando a classe
let usuario1 = new Usuario("Samuel", "Dias");
console.log("------");
let usuario2 = new Usuario("Carla", "Bastos");
console.log("=======");