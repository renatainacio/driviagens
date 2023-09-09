import Joi from "joi";

const travelSchema = Joi.object({
    passengerId: Joi.number().integer().required().options({ convert: false }),
    flightId: Joi.number().integer().required().options({ convert: false }),
});

export default travelSchema;