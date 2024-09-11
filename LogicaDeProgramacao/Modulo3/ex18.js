// Definição da classe
class Receita {
    constructor(nome,calorias){
        this.nome = nome;
        this.calorias = calorias;
    }
}

// Uso da classe
let macarrao = new Receita("Macarrão", 600);
console.log(macarrao);

let salada = new Receita("Salada", 400);
console.log(salada);


// Definição da classe
class Funcionario {
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade =idade;
        this.cargo = cargo
    }
}

// Uso da classe
let samuel = new Funcionario("Samuel Bueno", 30, "Fundador");
console.log(samuel);

let alice = new Funcionario("Alice Silva", 24, "Marketing");
console.log(alice);