function dobro() {
    console.log("O número será dobrado")
}

function executar(operacao) {
    if(operacao === "dobro"){
          return dobro()
    }
}

// Exemplos de uso - não mexa aqui
executar("dobro") // deveria chamar dobro
executar("triplo") // não deveria chamar triplo