function obterIniciais(nomes) {
    return nomes.map(nome => nome[0])
}

// Não modifique as linhas abaixo
console.log(obterIniciais(["Alice", "Bruno", "Samuel", "Augusto"])) // ["A", "B", "S", "A"]
console.log(obterIniciais(["samara", "alexandre", "carla"])) // ["s", "a", "c"]



function obterUltimoCaractere(nomes) {
    return nomes.map(nome => nome[nome.length -1])
    }
    
    // Não modifique as linhas abaixo
    console.log(obterUltimoCaractere(["Alice", "Bruno", "Samuel", "Augusto"])) // ["e", "o", "l", "o"]
    console.log(obterUltimoCaractere(["samara", "alexandre", "carla"])) // ["a", "e", "a"]