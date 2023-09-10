import httpStatus from "http-status";
import { passengersService } from "../services/passengers.service.js";

async function create(req, res) {
    const passenger = req.body;
    await passengersService.create(passenger);
    res.sendStatus(httpStatus.CREATED);
}

async function getAllPassengersWithTotalTravels(req, res) {
    const { name, page } = req.query;
    
    const passengers = await passengersService.getAllPassengersWithTotalTravels(name, page);
    res.send(passengers);
}

const passengersController = {
    create,
    getAllPassengersWithTotalTravels
}

export default passengersController;