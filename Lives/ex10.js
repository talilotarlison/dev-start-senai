function verificaCor(cor) {
    let cores = {
        red: "vermelho",
        black: "preto",
        green: "azul"
    }
    return cores[cor] || "cor indisponivel"

}

console.log(verificaCor("reds"))