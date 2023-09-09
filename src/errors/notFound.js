export function notFoundError(entity = "Recurso") {
    return {
        type: "notFound",
        message: `${entity} não encontrado(a)`
    }
}