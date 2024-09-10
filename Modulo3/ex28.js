// Definição da classe
class Veiculo {
    constructor(modelo, marca, ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }
    marcaEAno() {
        return `Este veículo é de ${this.ano}, da marca ${this.marca}`;
    }
}