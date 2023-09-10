export function invalidFilterDate() {
    return {
        type: "invalidFilterDate",
        message: "You need to provide two dates to filter the flights."
    }
}