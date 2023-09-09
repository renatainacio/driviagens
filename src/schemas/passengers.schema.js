import Joi from 'joi';

const passengerSchema = Joi.object({
    firstName: Joi.string().required().min(2).max(100),
    lastName: Joi.string().required().min(2).max(100)
});

export default passengerSchema;