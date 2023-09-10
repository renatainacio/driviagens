import { invalidFormatError } from "../errors/invalidFormat.js";
import { conflictError } from "../errors/conflict.js";
import { notFoundError } from "../errors/notFound.js";
import { citiesRepository } from "../repositories/cities.repository.js";
import { flightsRepository } from "../repositories/flights.repository.js";
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import joiBase from 'joi';
import joiDate from '@joi/date';
import { invalidFilterDate } from "../errors/invalidFilterDate.js";
import { biggerDateBeforeSmaller } from "../errors/biggerDateBeforeSmaller.js";
import { invalidPageValue } from "../errors/invalidPageValue.js";
import { invalidDateNewFlight } from "../errors/invalidDateNewFlight.js";

async function create(flight) {
    if (flight.origin === flight.destination) throw conflictError("Flight");
    const origin = await citiesRepository.findCityById(flight.origin);
    const destination = await citiesRepository.findCityById(flight.destination);
    if (origin.rows.length === 0) throw notFoundError("Origin");
    if (destination.rows.length === 0) throw notFoundError("Destination");
    dayjs.extend(customParseFormat);
    flight.date = dayjs(flight.date, "DD-MM-YYYY");
    if (flight.date.diff(dayjs(new Date())) < 0) throw invalidDateNewFlight();
    await flightsRepository.create(flight);
}

async function getAllFlights(origin, destination, biggerDate, smallerDate, page){
    if (page && (isNaN(page) || page <= 0)) throw invalidPageValue();
    const Joi = joiBase.extend(joiDate);
    dayjs.extend(customParseFormat);
    if (biggerDate && smallerDate) {
        let validation = Joi.date().format('DD-MM-YYYY').validate(biggerDate);
        if (validation.error) throw invalidFormatError("date");
        biggerDate = dayjs(biggerDate, "DD-MM-YYYY");
        validation = Joi.date().format('DD-MM-YYYY').validate(smallerDate);
        if (validation.error) throw invalidFormatError("date");
        smallerDate = dayjs(smallerDate, "DD-MM-YYYY");
        if (biggerDate.diff(smallerDate) < 0) throw biggerDateBeforeSmaller();
    }
    else if (smallerDate || biggerDate) throw invalidFilterDate();
    const flights = await flightsRepository.getAllFlights(origin, destination, biggerDate, smallerDate, page);
    flights.rows.forEach(flight => flight.date = dayjs(flight.date).format('DD-MM-YYYY'));
    return flights.rows;
}

export const flightsService = {
    create,
    getAllFlights
}