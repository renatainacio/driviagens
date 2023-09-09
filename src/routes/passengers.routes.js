import { Router } from 'express';
import validateSchema from '../middlewares/validateSchema.js';
import passengerSchema from '../schemas/passengers.schema.js';
import passengersController from '../controllers/passengers.controller.js';

const passengersRouter = Router();

passengersRouter.post("/passengers", validateSchema(passengerSchema), passengersController.create)

export default passengersRouter;