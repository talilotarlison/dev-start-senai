class Carro {
    constructor(modelo, marca, ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }
    marcaEAno() {
        return `Este carro é de ${this.ano} da marca ${this.marca}`;
    }
}


var fusca = new Carro("fusca","ford",2018 )