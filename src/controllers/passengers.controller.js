import httpStatus from "http-status";
import { passengersService } from "../services/passengers.service.js";

async function create(req, res) {
    const passenger = req.body;
    await passengersService.create(passenger);
    res.sendStatus(httpStatus.CREATED);
}

async function getAllPassengersWithTotalTravels(req, res) {
    const { name } = req.query;

    const passengers = await passengersService.getAllPassengersWithTotalTravels(name);
    res.send(passengers);
}

const passengersController = {
    create,
    getAllPassengersWithTotalTravels
}

export default passengersController;