import Joi from 'joi'

const queryValidate = async(req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string().required().min(5),
        lastName: Joi.string().required().min(5) ,
        email: Joi.string().email().required(),
        message: Joi.string().required().min(5)
    })
    const result = await schema.validate(req.body);
    if (result.error) {
        return res.status(400).json({status: 400, error: `${result.error.details[0].message}`
        })
    }
    next()
}

module.exports = queryValidate
