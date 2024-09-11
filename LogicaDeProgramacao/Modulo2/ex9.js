let nome = "Hello, World!";

console.log(nome[0]);
console.log(nome[nome.length -1]);



let nomes = ["Samuel", "Alexandre", "Carlos"]

console.log(nomes) // log da matriz
console.log(nomes[0]) // log do primeiro item


// crie um lista de compras em uma matriz
let listaDeCompras = ["Arroz", "uva","ovo,","carner"]


function obterTamanhoDaMatriz(usuarios) {
    return usuarios.length
}

// Não modifique as linhas abaixo:
console.log(obterTamanhoDaMatriz(["Samuel", "Alexandre", "Carla"])) // 3
console.log(obterTamanhoDaMatriz(["Carla"])) // 1
console.log(obterTamanhoDaMatriz([])) // 0


function adicionarBanana(itens) {
    itens.push("Banana")
    return itens
}

// Não modifique as linhas abaixo:
console.log(adicionarBanana(["Leite"])) // ["Leite", "Banana"]
console.log(adicionarBanana(["Tomate", "Queijo"])) // ["Tomate", "Queijo", "Banana"]
console.log(adicionarBanana([])) // ["Banana"]

function obterUltimoItem(itens) {
    return itens[itens.length -1]
    }
    
    // Não modifique as linhas abaixo:
    console.log(obterUltimoItem(["Leite"])) // "Leite"
    console.log(obterUltimoItem(["Tomate", "Queijo"])) // "Queijo"
    console.log(obterUltimoItem([])) // undefined