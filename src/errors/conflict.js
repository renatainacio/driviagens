export function conflictError(entity = "Dado") {
    if (entity === "Voo")
        return {
            type: "conflict",
            message: `${entity} deve ter destino diferente da origem!`
        }
    return {
        type: "conflict",
        message: `${entity} já cadastrado(a)!`
    }
}