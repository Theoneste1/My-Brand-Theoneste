import Joi from 'joi';

// login validation
const loginValidate = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required().min(2)
    })
    const result = await schema.validate(req.body);
    if (result.error) {
        return res.status(400).json({
            status: 400, error: `${result.error.details[0].message}`
        })
    }
    next()
}

// blog validation
const blogValidate = (req, res, next) => {
    const schema = Joi.object({
        topic: Joi.string().required().min(5),
        imageLink: Joi.string(),
        content: Joi.string() .required() .min(5)
    })

    const result = schema.validate(req.body);
    if (result.error) {
       return res.status(400).json({status: 400,error: `${result.error.details[0].message}`
        })
    }
    next()
}

// query validator
const queryValidate = async (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string().required().min(5),
        lastName: Joi.string().required().min(5),
        email: Joi.string().email().required(),
        message: Joi.string().required().min(5)
    })
    const result = await schema.validate(req.body);
    if (result.error) {
        return res.status(400).json({
            status: 400, error: `${result.error.details[0].message}`
        })
    }
    next()
}

export { loginValidate, blogValidate, queryValidate} 
