import { notFoundError } from "../errors/notFound.js";
import { flightsRepository } from "../repositories/flights.repository.js";
import { passengersRepository } from "../repositories/passengers.repository.js";
import { travelsRepository } from "../repositories/travels.repository.js";

async function create(travel) {
    const flight = await flightsRepository.findFlightById(travel.flightId);
    if (!flight.rows.length) throw notFoundError("Voo");
    const passenger = await passengersRepository.findPassengerById(travel.passengerId);
    if (!passenger.rows.length) throw notFoundError("Passageiro");
    await travelsRepository.create(travel);
}

export const travelsService = {
    create
}