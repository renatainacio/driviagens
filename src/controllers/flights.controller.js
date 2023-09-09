import httpStatus from "http-status";
import { flightsService } from "../services/flights.service.js";

export async function create(req, res) {
    const flight = req.body;
    await flightsService.create(flight);
    res.sendStatus(httpStatus.CREATED);
}

const flightsController = {
    create
}

export default flightsController;