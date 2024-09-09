function oTesteEhMuitoFacil(notas) {
    return notas.includes(20)
    }
    
    // Não modifique as linhas abaixo
    console.log(oTesteEhMuitoFacil([10, 15, 13, 19])) // deveria retornar false
    console.log(oTesteEhMuitoFacil([7, 13, 20, 15])) // deveria retornar true


    function converterParaFormatoCSV(notas) {
        return notas.join("; ")
       }
       
       // Não modifique as linhas abaixo
       console.log(converterParaFormatoCSV([10, 15, 13, 19])) // "10;15;13;19"

       console.log(converterParaFormatoCSV([7, 13, 20, 15])) // "7;13;20;15"

       function exportarCSV(notas) {
        return notas.join(", ")
       }
       
       // Não modifique as linhas abaixo
       console.log(exportarCSV([10, 15, 13, 19])) // "10, 15, 13, 19"
       console.log(exportarCSV([7, 13, 20, 15])) // "7, 13, 20, 15"