export function invalidDateNewFlight() {
    return {
        type: "invalidDateNewFlight",
        message: `A data não pode ser anterior à hoje!`
    }
}