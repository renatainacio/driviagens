import { invalidFormatError } from "../errors/invalidFormat.js";
import { conflictError } from "../errors/conflict.js";
import { notFoundError } from "../errors/notFound.js";
import { citiesRepository } from "../repositories/cities.repository.js";
import { flightsRepository } from "../repositories/flights.repository.js";
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat.js"

async function create(flight) {
    if (flight.origin === flight.destination) throw conflictError("Voo");
    const origin = await citiesRepository.findCityById(flight.origin);
    const destination = await citiesRepository.findCityById(flight.destination);
    if (origin.rows.length === 0) throw notFoundError("Origem");
    if (destination.rows.length === 0) throw notFoundError("Destino");
    dayjs.extend(customParseFormat);
    flight.date = dayjs(flight.date, "DD-MM-YYYY");
    if (flight.date.diff(dayjs(new Date())) < 0) throw invalidFormatError("Data anterior");
    await flightsRepository.create(flight);
}

export const flightsService = {
    create
}