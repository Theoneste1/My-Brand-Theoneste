//schema.js
const Joi = require('@hapi/joi')

const signUpValidate = (req, res, next) => {
    
    const schema = Joi.object().keys({
        firstName: Joi.string()
            .required()
            .trim()
            .min(5)
            .max(10)
            .regex(/[a-zA-Z]/)
            .messages({
                'string.base': 'Invalid type, firstName must be a string',
                'string.empty': 'Please enter your firstName',
                'string.pattern.base': 'firstName must consit of letters only',
                'string.min': 'firstName must be at least 3 letters',
                'string.max': 'firstName must be at most 10 letters',
                'any.required': 'Please enter your firstName is required'
            }),
        lastName: Joi.string()
            .required()
            .trim()
            .min(5)
            .max(10)
            .regex(/[a-zA-Z]/)
            .message({
                'string.base': 'Invalid type, lastName must be a string',
                'string.empty': 'Please enter your lastName',
                'string.pattern.base': 'lastName must consit of letters only',
                'string.min': 'lastName must be at least 3 letters',
                'string.max': 'lastName must be at most 10 letters',
                'any.required': 'Please enter your lastName is required'
            }),
        email: Joi.string().email().required(),
    })

}
module.exports=signUpValidate
