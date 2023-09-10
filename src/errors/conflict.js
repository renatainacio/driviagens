export function conflictError(entity = "Data") {
    if (entity === "Flight")
        return {
            type: "conflict",
            message: `${entity} must be different than the origin!`
        }
    return {
        type: "conflict",
        message: `${entity} already registered!`
    }
}