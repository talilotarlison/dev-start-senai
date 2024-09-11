// Definição da classe. Insira o contrutor dentro dela
class Receita {
    constructor(nome, calorias){
        console.log(nome);
        console.log(calorias);
    }
}

// Uso da classe
let macarrao = new Receita("Macarrão", 600);
console.log("---");
let salada = new Receita("Salada", 400);


// Definição da classe
class Usuario {
    constructor() {
    this.idade = 30
    this.votou = false
    }
}

// Uso da classe
let usuario = new Usuario();
console.log(usuario);