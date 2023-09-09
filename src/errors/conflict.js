export function conflictError(entity = "Dado") {
    return {
        type: "conflict",
        message: `${entity} já cadastrado(a)!`
    }
}