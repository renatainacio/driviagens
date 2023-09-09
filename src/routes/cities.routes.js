import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import citySchema from "../schemas/cities.schema.js";
import citiesController from "../controllers/cities.controller.js";


const citiesRouter = Router();

citiesRouter.post("/cities", validateSchema(citySchema, "cidade"), citiesController.create);

export default citiesRouter;
