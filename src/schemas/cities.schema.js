import Joi from "joi";

const citySchema = Joi.object({
    name: Joi.string().required().min(2).max(50)
});

export default citySchema;