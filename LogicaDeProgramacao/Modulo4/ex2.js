function obterEhNomeValido(primeiroNome, sobrenome) {
    if (primeiroNome.length > 0 && sobrenome.length > 0 && !sobrenome.endsWith('.')) {
        return "Sim";
    } else {
        return "Não";
    }
}

// Exemplos de uso:
console.log(obterEhNomeValido("João", "Silva")); // Sim
console.log(obterEhNomeValido("", "Silva")); // Não
console.log(obterEhNomeValido("João", "")); // Não
console.log(obterEhNomeValido("João", "Silva.")); // Não
