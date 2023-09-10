import { passengersRepository } from "../repositories/passengers.repository.js";
import { tooManyResults } from "../errors/tooManyResults.js";

async function create(passenger) {
    await passengersRepository.create(passenger);
}

async function getAllPassengersWithTotalTravels(partialName) {
    const passengers = await passengersRepository.getAllPassengersWithTotalTravels(partialName);
    if (passengers.rows.length > 10) throw tooManyResults();
    return passengers.rows;
}

export const passengersService = {
    create,
    getAllPassengersWithTotalTravels
}