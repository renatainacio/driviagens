export function invalidFormatError(entity = "dado") {
    return {
        type: "invalidFormat",
        message: `Formato de ${entity} inválido!`
    }
}