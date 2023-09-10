export function notFoundError(entity = "Resource") {
    return {
        type: "notFound",
        message: `${entity} not found`
    }
}