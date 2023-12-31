import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import flightSchema from "../schemas/flights.schema.js";
import flightsController from "../controllers/flights.controller.js";


const flightsRouter = Router();

flightsRouter.post("/flights", validateSchema(flightSchema, "flight"), flightsController.create);
flightsRouter.get("/flights", flightsController.getAllFlights);

export default flightsRouter;
