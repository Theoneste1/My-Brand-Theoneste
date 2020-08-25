import Joi from 'joi';
const profileValidate = (req, res, next) => {

    const schema = Joi.object({
        title: Joi.string().required().min(5),
        picture: Joi.string(),
        description: Joi.string().required().min(5),
        skills: Joi.string().required().min(5),
    })

    const result = schema.validate(req.body);
    if (result.error) {
        return res.status(400).json({
            status: 400, error: `${result.error.details[0].message}`
        })
    }
    next()
}

module.exports = profileValidate
