// Definição da classe
class Usuario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    obterNomeCompleto() {
        // Mais adiante, você aprenderá como implementar este método
        return "Silvia Moreira";
    }
}

// Uso da classe
let usuario = new Usuario("Silvia", "Moreira");
console.log(usuario.obterNomeCompleto());