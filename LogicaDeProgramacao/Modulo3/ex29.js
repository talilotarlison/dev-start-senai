// Definição da classe Usuario
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

// Insira aqui a definição da classe Escritor.
class Escritor extends Usuario{
    publicarArtigo(){
        "Artigo publicado"
    }
}
// Lembre-se de usar herança e de criar o método
// de instância publicarArtigo().
