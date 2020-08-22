import Joi from 'joi';
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

module.exports = blogValidate
