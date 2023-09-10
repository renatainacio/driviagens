export function invalidDateNewFlight() {
    return {
        type: "invalidDateNewFlight",
        message: `The flight date must be set for a date after today!`
    }
}