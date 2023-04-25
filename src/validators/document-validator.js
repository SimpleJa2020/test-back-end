const Joi = require('joi');

const saveDocSchema = Joi.object({
    image: Joi.string().trim().required().messages({
        'any.required': 'image is required',
        'string.empty': 'image is required'
    }),

    number: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .messages({
            'any.required': 'number name is required',
            'string.empty': 'number name is required',
            'string.base': 'number must be a string'
        }),
    customerName: Joi.string().required().messages({
        'any.required': 'customer name is required',
        'string.empty': 'customer name is required',
        'string.base': 'customer name must be a string'
    })
});

exports.validateDocument = input => {
    const { value, error } = saveDocSchema.validate(input);
    if (error) {
        throw error;
    }
    return value;
};
