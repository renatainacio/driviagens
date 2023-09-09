import { passengersRepository } from "../repositories/passengers.repository.js";

async function create(passenger) {
    await passengersRepository.create(passenger);
}

export const passengersService = {
    create
}