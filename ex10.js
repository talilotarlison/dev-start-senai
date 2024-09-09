let nomes = ["Alice", "Bruno", "Samuel", "Augusto"]

// Itere sobre os nomes e exiba cada nome no console
nomes.forEach(nome=>console.log(nome))



function verificarPresencaCaractere(caracteres, caractere) {
    return caracteres.incluids(caractere)

}

// Não modifique as linhas abaixo:
console.log(verificarPresencaCaractere(["A", "B", "C", "D"], "A")) // true
console.log(verificarPresencaCaractere(["A", "B", "C", "D"], "F")) // false
console.log(verificarPresencaCaractere(["A", "B"], "B")) // true
console.log(verificarPresencaCaractere(["A", "B"], "C")) // false


function exportaCSV(usuarios) {
 return usuarios.join(", ")
}

// Não modifique as linhas abaixo
console.log(exportaCSV(["Alice", "Bruno", "Sara", "Augusto"])) // "Alice, Bruno, Sara, Augusto"
console.log(exportaCSV(["Samuel", "Alexandre", "Carla"])) // "Samuel, Alexandre, Carla"


function nomesEmMinusculas(nomes) {
    return nomes.map((nome)=>nome.toLowerCase())
}

// Não modifique as linhas abaixo
console.log(nomesEmMinusculas(["Alice", "Bruno", "Samuel", "Augusto"])) // ["alice", "bruno", "samuel", "augusto"]
console.log(nomesEmMinusculas(["SAMARA", "ALEXANDRE", "CARLA"])) // ["samara", "alexandre", "carla"]

function nomesEmMaiusculas(nomes) {
    return nomes.map((nome)=>nome.toUpperCase())
}

// Não modifique as linhas abaixo
console.log(nomesEmMaiusculas(["Alice", "Bruno", "Samuel", "Augusto"])) // ["ALICE", "BRUNO", "SAMUEL", "AUGUSTO"]
console.log(nomesEmMaiusculas(["samuel", "alice", "cARLa"])) // ["SAMUEL", "ALICE", "CARLA"]



