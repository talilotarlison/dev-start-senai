function dobro() {
    console.log("O número será dobrado")
}

function triplo() {
    console.log("O número será triplicado")
}

function executar(operacao) {
if(operacao === "dobro"){
          return dobro()
    }
if(operacao === "triplo"){
          return triplo()
    }

}

// Exemplos de uso - não mexa aqui
executar("dobro") // chamará a função dobro()
executar("triplo") // chamará a função triplo()