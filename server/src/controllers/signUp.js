//validators.js

//from controller
const signUpmodel =require("./../validators/signUp")

exports.signUpValidator = async(req, res, next) => {
    const { error } = signUpmodel.validate(req.body,{abortEarly:false});
    if (error) return res.status(400).json({ error });
    next();
};
