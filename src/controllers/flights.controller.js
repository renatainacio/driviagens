import httpStatus from "http-status";
import { flightsService } from "../services/flights.service.js";

async function create(req, res) {
    const flight = req.body;
    await flightsService.create(flight);
    res.sendStatus(httpStatus.CREATED);
}

async function getAllFlights(req, res){
    const { origin, destination, page } = req.query;
    const biggerDate = req.query['bigger-date'];
    const smallerDate = req.query['smaller-date'];
    const flights = await flightsService.getAllFlights(origin, destination, biggerDate, smallerDate, page);
    res.send(flights);
}

const flightsController = {
    create,
    getAllFlights
}

export default flightsController;