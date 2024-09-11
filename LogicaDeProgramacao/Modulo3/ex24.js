// Definição da classe
class Usuario {

    //Implemente os métodos: 
    //1. constructor 
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade
    }
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
    obterIniciais() {
        return this.nome[0]
    }
    podeVotar() {
        return this.idade >= 16
    }

}

// Uso da classe
let sara = new Usuario("Sara", "Gomes", 17);
let cesar = new Usuario("César", "Assis", 13);
console.log("---");