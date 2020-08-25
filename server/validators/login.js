import Joi from 'joi'

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

module.exports = loginValidate
