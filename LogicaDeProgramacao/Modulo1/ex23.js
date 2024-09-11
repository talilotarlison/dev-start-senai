// "Bom dia", quando a hora for estritamente antes das 12.
// "Boa tarde", quando a hora estiver entre as 12 (inclusive), mas estritamente antes das 20.
// "Boa noite" em todos os outros casos.
// Implemente a função receberSaudacaoPorPeriodoDoDia() conforme especificado.

function receberSaudacaoPorPeriodoDoDia(hora) {
    if (hora < 12) {
        return "Bom dia";
    } else if (hora < 20) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}

//Não modifique as linhas abaixo
console.log(receberSaudacaoPorPeriodoDoDia(11)); // "Bom dia"
console.log(receberSaudacaoPorPeriodoDoDia(12)); // "Boa tarde"
console.log(receberSaudacaoPorPeriodoDoDia(14)); // "Boa tarde"
console.log(receberSaudacaoPorPeriodoDoDia(22)); // "Boa noite"
