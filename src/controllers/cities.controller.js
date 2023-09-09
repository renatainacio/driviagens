import httpStatus from "http-status";
import { citiesService } from "../services/cities.service.js";

export async function create(req, res) {
    const city = req.body;
    await citiesService.create(city);
    res.sendStatus(httpStatus.CREATED);
}

const citiesController = {
    create
}

export default citiesController;