import { passengersRepository } from "../repositories/passengers.repository.js";
import { tooManyResults } from "../errors/tooManyResults.js";
import { invalidPageValue } from "../errors/invalidPageValue.js";

async function create(passenger) {
    await passengersRepository.create(passenger);
}

async function getAllPassengersWithTotalTravels(partialName, page) {
    if (page && (isNaN(page) || page <= 0)) throw invalidPageValue();
    const passengers = await passengersRepository.getAllPassengersWithTotalTravels(partialName, page);
    if (passengers.rows.length > 10) throw tooManyResults();
    return passengers.rows;
}

export const passengersService = {
    create,
    getAllPassengersWithTotalTravels
}