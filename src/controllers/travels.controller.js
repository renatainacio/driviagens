import httpStatus from "http-status";
import { travelsService } from "../services/travels.service.js";

export async function create(req, res) {
    const travel = req.body;
    await travelsService.create(travel);
    res.sendStatus(httpStatus.CREATED);
}

const travelsController = {
    create
}

export default travelsController;