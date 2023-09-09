import httpStatus from "http-status";
import { passengersService } from "../services/passengers.service.js";

export async function create(req, res) {
    const passenger = req.body;
    await passengersService.create(passenger);
    res.sendStatus(httpStatus.CREATED);
}

const passengersController = {
    create
}

export default passengersController;