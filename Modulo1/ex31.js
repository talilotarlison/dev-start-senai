function calcularDiferenca(primeiroRetangulo, segundoRetangulo) {
    console.log("Primeiro Retângulo", primeiroRetangulo)

    console.log("Segundo Retângulo", segundoRetangulo)
    let areaPrimeiroRetangulo = primeiroRetangulo[0] * primeiroRetangulo[1];
    let areaSegundoRetangulo = segundoRetangulo[0] * segundoRetangulo[1]
    return areaPrimeiroRetangulo - areaSegundoRetangulo

}

calcularDiferenca([10, 20], [5, 10])
calcularDiferenca([5, 3], [8, 10])