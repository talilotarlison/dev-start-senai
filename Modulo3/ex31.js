// Classe Usuario
class Usuario {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    podeVotar() {
        return this.idade >= 16;
    }
}

// Implemente a classe Escritor

class Escritor extends Usuario{
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome} [escritor]`;
    }
    publicarArtigo(){
        return "Artigo publicado"
    }
}
// Ela será filha da classe Usuario


// Testando a classe
let escritora = new Escritor ("Helena", "Silva", 22);
console.log(escritora.obterNomeCompleto());
escritora.publicarArtigo();