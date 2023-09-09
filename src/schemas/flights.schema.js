import joiBase from "joi";
import joiDate from "@joi/date"

const Joi = joiBase.extend(joiDate);

const flightSchema = Joi.object({
    origin: Joi.number().integer().required().options({ convert: false }),
    destination: Joi.number().integer().required().options({ convert: false }),
    date: Joi.date().format('DD-MM-YYYY').required()
});

export default flightSchema;