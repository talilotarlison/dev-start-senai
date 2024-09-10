// Crie um método construtor dentro da classe Usuario. O construtor 
// deve capturar o nome, sobrenome e idade que recebe como parâmetros, 
// e armazená-los em variáveis de instância.

// Definição da classe
class Usuario {
    constructor(nome,sobrenome,idade){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }
}

// Uso da classe
let samuel = new Usuario("Samuel", "Bueno", 19);
console.log(samuel);

let carla = new Usuario("Carla", "Diniz", 30);
console.log(carla);