function adicionarItem(itens, item) {
    itens.push(item)
    return itens
}
 
function exportarMinusculasCSV(itens) {
    return itens.map(item=>item.toUpperCase()).join(", ")
}

console.log(adicionarItem([1,3,5,8,7,9,8],5))
console.log(exportarMinusculasCSV(["Alice", "Bruno", "Sara", "Augusto"]))



function adicionarItem(itens, item) {
    itens.push(item)
    return itens
}
 
function exportarMinusculasCSV(itens) {
    return itens.map(item=>item.toLowerCase()).join(", ")
}

console.log(adicionarItem([1,3,5,8,7,9,8],5))
console.log(exportarMinusculasCSV(["Alice", "Bruno", "Sara", "Augusto"]))