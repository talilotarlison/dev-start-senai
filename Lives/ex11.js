// https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content

let login = {
    user: "admin",
    senha: "1234"
}

function validarLogin(login) {
    // https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content

    const status = {
        sucess: "sucesso",
        fail: "falha"
    }

    if (login.user === "admin" && login.senha == "12345") {
        return status.sucess
    } else {
        return status.fail
    }
}

console.log(validarLogin(login))