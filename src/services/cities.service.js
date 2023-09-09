import { conflictError } from "../errors/conflict.js";
import { citiesRepository } from "../repositories/cities.repository.js";

async function create(city) {
    const findCity = await citiesRepository.findCityByName(city.name);
    if (findCity.rows.length) throw conflictError("Cidade");
    await citiesRepository.create(city);
}

export const citiesService = {
    create
}