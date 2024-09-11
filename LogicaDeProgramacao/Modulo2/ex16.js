// Você está criando uma função que faz parte de um blog onde os
// usuários podem publicar artigos.

// Complete a função podeVisualizarArtigo() de forma que ela retorne:

// true quando o parâmetro tipo, que representa o tipo de usuário, 
// for "admin".
// true quando o parâmetro ehAutor for true.
// false nas demais situações.
// Importante: O autor do artigo sempre pode visualizar seu próprio 
// artigo. O administrador pode visualizar qualquer artigo.

// Complete a função para que ela retorne true quando o usuário tiver 
// permissão para visualizar o artigo, e false caso contrário.


function podeVisualizarArtigo(tipo, ehAutor) {
    if(tipo === "admin" || ehAutor === true){
        return true
    }else{
        return false  
    }
}

// Não modifique as linhas abaixo
console.log(podeVisualizarArtigo("admin", false)) // true
console.log(podeVisualizarArtigo("admin", true)) // true
console.log(podeVisualizarArtigo("user", true)) // true
console.log(podeVisualizarArtigo("user", false)) // false