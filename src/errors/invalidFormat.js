export function invalidFormatError(entity = "dado") {
    if (entity === "Data anterior")
        return {
            type: "invalidFormat",
            message: `A data não pode ser anterior à hoje!`
        }   
    return {
        type: "invalidFormat",
        message: `Formato de ${entity} inválido!`
    }
}