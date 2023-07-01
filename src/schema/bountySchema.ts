import Joi from "joi";

export const createBountySchema = Joi.object({
    name: Joi.string().required(),
    nickname: Joi.string().required(),
    bounty: Joi.number().positive().greater(0).required()
})

export const updateBountySchema = Joi.object({
    name: Joi.string().required(),
    bounty: Joi.number().positive().greater(0).required()
})

export const deleteBountySchema = Joi.object({
    name: Joi.string().required()
})
