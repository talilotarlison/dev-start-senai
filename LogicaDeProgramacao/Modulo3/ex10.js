function obterTitulosDasReceitas(receitas) {
    return receitas.map(function(receita) {
        return receita.titulo;
    });
}

// Exemplo de uso - não mexa aqui
let receitas = [
    {
        titulo: "Macarrão",
        preparacaoEmMinutos: 30,
        classificacao: 4.5
    },
    {
        titulo: "Lasanha",
        preparacaoEmMinutos: 45,
        classificacao: 3.9
    }
];

console.log(obterTitulosDasReceitas(receitas));